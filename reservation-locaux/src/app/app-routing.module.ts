import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeLocalComponent } from './liste-local/liste-local.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';

const routes: Routes = [
  { path: 'etudiants', component: ListeEtudiantComponent },
  { path: 'reservations', component: ListeReservationComponent },
  { path: 'locaux', component: ListeLocalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
