import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { gsap } from 'gsap';
import { FooterComponent } from "../footer/footer.component";

gsap.registerPlugin(ScrambleTextPlugin);

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {

    /** -------------------------
     *  GSAP TEXT SCRAMBLE
     * ------------------------- */
    const tl = gsap.timeline({
      id: "text-scramble",
      defaults: { ease: "none" }
    });

    tl.set("#testoAnimato", {
      opacity: 0
    });
    tl.set("#testoAnimato1", {
      opacity: 0
    });

    tl.to("#testoAnimato", {
      scrambleText: {
        text: "Coding lover",
        chars: "lowerCase"
      },
      opacity: 1,
      duration: 2
    });
    tl.to("#testoAnimato1", {
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
      opacity: 1,
      duration: 2
    });

    /** -------------------------
     *  SCROLL TO ANCHOR (FRAGMENT)
     * ------------------------- */
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Timeout = aspetta il rendering delle animazioni/layout
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    });

  }
}
