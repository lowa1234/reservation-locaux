import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutLocalComponent } from './ajout-local/ajout-local.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeLocalComponent } from './liste-local/liste-local.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ModificationEtudiantComponent } from './modification-etudiant/modification-etudiant.component';
import { ModificationLocalComponent } from './modification-local/modification-local.component';
import { ModificationReservationComponent } from './modification-reservation/modification-reservation.component';

const routes: Routes = [
  { path: 'etudiants', component: ListeEtudiantComponent },
  { path: 'ajout-etudiants', component: AjoutEtudiantComponent },
  { path: 'modification-etudiants', component: ModificationEtudiantComponent },
  { path: 'reservations', component: ListeReservationComponent },
  { path: 'ajout-reservations', component: AjoutReservationComponent },
  { path: 'locaux', component: ListeLocalComponent },
  { path: 'ajout-locaux', component: AjoutLocalComponent },
  { path: 'modification-locaux', component: ModificationLocalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
