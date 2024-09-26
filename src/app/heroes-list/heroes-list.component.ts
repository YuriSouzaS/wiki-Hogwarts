import { Component } from '@angular/core';
import { SectionOneComponent } from "../section-one/section-one.component";
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [SectionOneComponent, CharactersComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})

export class HeroesListComponent {

}
