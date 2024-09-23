import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { BarFooterComponent } from "./bar-footer/bar-footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeroesListComponent, CrisisListComponent, BarFooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Mindfuness';
}
