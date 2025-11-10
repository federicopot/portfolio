import { AfterViewInit, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'app-pre-loading',
  imports: [],
  templateUrl: './pre-loading.component.html',
  styleUrl: './pre-loading.component.scss'
})
export class PreLoadingComponent implements AfterViewInit {
  readonly #router = inject(Router)
  ngAfterViewInit() {
    let tl = gsap.timeline({
      onComplete:()=>{
        this.#router.navigate(['/home'])
      }
    })
    const container = ".container";
    tl.set(".container", { opacity: 1 });
    let split = SplitText.create(".animate-me", { type: "words", aria: "hidden" });

    // Animazione di apparizione parole
    // Appare parola per parola (facoltativo, se vuoi vedere il testo prima del fade out)
    tl.from(split.words, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "sine.out",
      stagger: 0.1
    });

    // Fade out invertito: le parole scompaiono una a una
    tl.to(split.words, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "sine.in",
      stagger: {
        each: 0.05,
        from: "end" // parte dall'ultima parola
      }
    });

    // Sfondo bianco mentre le parole spariscono
    tl.to(container, {
      backgroundColor: "#ffffff",
      duration: 0.8,
      ease: "sine.inOut"
    }, "<"); // "<" sincronizza l'inizio del cambio sfondo con il fade out delle parole
  }
}
