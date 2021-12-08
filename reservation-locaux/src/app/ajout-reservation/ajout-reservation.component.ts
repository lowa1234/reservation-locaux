import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-ajout-reservation',
  templateUrl: './ajout-reservation.component.html',
  styleUrls: ['./ajout-reservation.component.css']
})
export class AjoutReservationComponent implements OnInit {

  model: Reservation = {nom_local: '', da_etudiant: '', heure_debut: '', heure_fin:''};

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
