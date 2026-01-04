import { AfterViewInit, Component, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ProjectService } from '../../services/projectService/project.service';
import { SkillsService } from '../../services/skills/skills.service';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, ScrollToPlugin);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [HeaderComponent, FooterComponent]
})
export class HomePageComponent implements AfterViewInit {
  readonly projectService = inject(ProjectService)
  readonly skillsService = inject(SkillsService)

  constructor(private route: ActivatedRoute) { }


  ngAfterViewInit(): void {

    const ctx = gsap.context(() => {
      const cursorTl = gsap.timeline({ repeat: -1 });
      /** TEXT SCRAMBLE */
      const tl = gsap.timeline();
      cursorTl.to("#lineText", {
        opacity: 0,
        duration: 0.5,
        ease: "none",
        delay: 0.2
      })
      .to("#lineText", {
        opacity: 1,
        duration: 0.5,
        ease: "none",
        delay: 0.2
      });

      tl.to("#testoAnimato", {
        opacity: 1,
        scrambleText: { text: "Coding lover", chars: "lowerCase" },
        duration: 2
      }).to("#testoAnimato1", {
        opacity: 1,
        scrambleText: {
          text: `I'm a student at Marconi Alta Formazione in Rovereto, specializing in computer science and driven by a deep
          passion for programming.
          \n\r
          I've independently explored languages such as Java, C#, and HTML, enhancing my skills through a variety of
          hands-on projects.
          \n\r
          Outside of coding, I enjoy nurturing my creative and athletic sides through reading, drawing, and swimming.`,
          chars: "lowerCase"
        },
        duration: 2
      })
      .add(cursorTl);

      /** ABOUT - ScrollTrigger + pin + cards */
      const cards = ["#card1", "#card2", "#card3"];
      const aboutImg = document.getElementById("aboutImage") as HTMLImageElement;

      // impostazioni iniziali
      cards.forEach((c, i) => {
        const el = document.querySelector(c) as HTMLElement;
        el.style.opacity = "0";
        el.style.filter = "blur(5px)";
        el.style.transform = "translateY(50px)";
      });

      // Timeline principale
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1
        }
      });

      // Step 1: testo
      tl2.from("#about .colls:nth-child(1) h2, #about .colls:nth-child(1) p", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.2
      });

      // Step 2: animazione card + immagine
      cards.forEach((card, index) => {

        // cambio immagine
        tl2.add(() => {
          const el = document.querySelector(card) as HTMLElement;
          const imgSrc = el.dataset["img"];
          if (!imgSrc) return;
          aboutImg.src = imgSrc;
          gsap.fromTo(aboutImg,
            { opacity: 0, scale: 0.95, x: 30 },
            { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power2.out" }
          );
        });

        // animazione card corrente
        tl2.to(card, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        }, "<"); // parte insieme al cambio immagine

        // nascondi la card precedente (se esiste)
        if (index > 0) {
          const prevCard = document.querySelector(cards[index - 1]) as HTMLElement;
          tl2.to(prevCard, {
            opacity: 0,
            y: 50,
            filter: "blur(5px)",
            duration: 0.8,
            ease: "power2.out"
          }, "<"); // parte insieme alla nuova card
        }
      });
    })
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        gsap.to(window, { duration: 2, scrollTo: `#${fragment}` });
      }
    });
  }
  darkenColor(color: string, amount: number = 20): string {
  // accetta HEX tipo #aabbcc
    let col = color.replace('#', '');

    if (col.length === 3) {
      col = col.split('').map(c => c + c).join('');
    }

    const num = parseInt(col, 16);

    let r = (num >> 16) - amount;
    let g = ((num >> 8) & 0x00ff) - amount;
    let b = (num & 0x0000ff) - amount;

    r = Math.max(0, r);
    g = Math.max(0, g);
    b = Math.max(0, b);

    return `rgb(${r}, ${g}, ${b})`;
  }

}
