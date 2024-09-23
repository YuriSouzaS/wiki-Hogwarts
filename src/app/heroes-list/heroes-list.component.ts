import { Component } from '@angular/core';
import { SectionOneComponent } from "../section-one/section-one.component";

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [SectionOneComponent, SectionOneComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})

export class HeroesListComponent {

}
