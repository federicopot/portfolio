import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // esempio progetti — sostituisci/estendi con i tuoi
  readonly #projects = [
    {
      title: 'Sama Service Website',
      short: 'A responsive personal site built with Angular and GSAP.',
      tags: ['Angular','GSAP','SCSS'],
      image: '/assets/images/project-portfolio.jpg',
      repo: 'https://github.com/yourusername/portfolio',
      demo: null
    },
    {
      title: 'ER Drawer App',
      short: 'Small Todo app with local storage and filters.',
      tags: ['JavaScript','HTML'],
      image: '/assets/images/project-todo.jpg',
      repo: null,
      demo: null
    },
    {
      title: 'Raspberry Zero W into a printer',
      short: 'Experimental firmware to emulate a USB printer on ESP32-S3.',
      tags: ['Embedded','C++'],
      image: '/assets/images/project-esp32.jpg',
      repo: null,
      demo: null
    }
  ];
  readonly #projectsSignal = signal<any>([])
  readonly projectComp = computed<any>(()=>this.#projectsSignal())
  constructor() {
    this.#projectsSignal.set(this.#projects)
  }
}
