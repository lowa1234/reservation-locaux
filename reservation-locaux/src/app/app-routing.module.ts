import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutLocalComponent } from './ajout-local/ajout-local.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeLocalComponent } from './liste-local/liste-local.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';

const routes: Routes = [
  { path: 'etudiants', component: ListeEtudiantComponent },
  { path: 'ajout-etudiants', component: AjoutEtudiantComponent },
  { path: 'reservations', component: ListeReservationComponent },
  { path: 'ajout-reservations', component: AjoutReservationComponent },
  { path: 'locaux', component: ListeLocalComponent },
  { path: 'ajout-locaux', component: AjoutLocalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
