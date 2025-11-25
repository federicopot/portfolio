import { AfterViewInit, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  listaLink : string[] = ["home", "about", "projects", "contacts"]
  #router = inject(ActivatedRoute)
  #fragment = signal<String>("home")
  fragmentCompute = computed<String>(()=>this.#fragment())
  ngAfterViewInit(): void {
    this.#router.fragment.subscribe(resp=>{
      if(resp)
        this.#fragment.set(resp)
    })
  }

}
