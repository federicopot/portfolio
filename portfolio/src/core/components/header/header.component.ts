import { AfterViewInit, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  listaLink: string[] = ["home", "about", "projects", "skills","contacts"];

  #router = inject(ActivatedRoute);
  #fragment = signal<string>("home");

  fragmentCompute = computed(() => this.#fragment());

  ngAfterViewInit(): void {
    // Aggiorna fragment al cambio URL
    this.#router.fragment.subscribe(resp => {
      if (resp) this.#fragment.set(resp);
    });

    // Opzionale: sincronizza con scroll usando GSAP
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onEnter: () => this.#fragment.set(sec.id),
        onEnterBack: () => this.#fragment.set(sec.id)
      });
    });
  }
}
