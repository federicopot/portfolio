import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // esempio progetti — sostituisci/estendi con i tuoi
  readonly #projects = [
    {
      title: 'Sama Service Website',
      short: 'A responsive site using angular for an activity',
      tags: ['Angular','GSAP','SCSS'],
      image: 'project-1.png',
      repo: null,
      demo: 'https://centrosamaservice.com/'
    },
    {
      title: 'ER Drawer App',
      short: 'Small web app to create ER diagrams for database folowing standards',
      tags: ['JavaScript','HTML'],
      image: 'project-2.png',
      repo: 'https://github.com/federicopot/ErDrawer',
      demo: 'https://erdrawer.netlify.app/'
    },
    {
      title: 'Raspberry Zero W into a printer',
      short: 'Thesis made for degree',
      tags: ['Embedded','C++'],
      image: 'project-3.png',
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
