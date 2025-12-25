import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: number = 2025; // Imposta l'anno corrente

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  // Puoi anche definire qui i tuoi link social se non lo fai nell'HTML
  readonly socialLinks = [
    // Esempio: dovrai sostituire con i tuoi link reali
    { name: 'GitHub', url: 'https://github.com/federicopot', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/federico.potrich/', icon: 'instagram' },
    { name: 'Itch.io', url: 'https://federico-potrich.itch.io/', icon: 'itch' },
    // Aggiungi altri link se necessario
  ];
}
