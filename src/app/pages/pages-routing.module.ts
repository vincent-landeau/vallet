import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', // correspond à http://localhost:4200/home-page
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
