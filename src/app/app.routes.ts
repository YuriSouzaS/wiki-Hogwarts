import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiarioComponent } from './diario/diario.component';

export const routes: Routes = [
    {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path: 'diario', component: DiarioComponent},
    {path: '**', component: PageNotFoundComponent}
];
