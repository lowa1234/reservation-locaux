import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Local } from '../local';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-ajout-reservation',
  templateUrl: './ajout-reservation.component.html',
  styleUrls: ['./ajout-reservation.component.css']
})
export class AjoutReservationComponent implements OnInit {
  etudiants: Etudiant[] = [];
  locaux: Local[] = [];
  select_heure_debut: String[] = ['12:00:00', '13:00:00', '14:00:00', '15:00:00'];
  select_heure_fin: String[] = ['13:00:00', '14:00:00', '15:00:00', '16:00:00'];

  model: Reservation = {nom_local: '', da_etudiant: '', date: '', heure_debut: '', heure_fin:''};

  constructor(private reservationService: ReservationService, private etudiantService: EtudiantService, private localService: LocalService) { }

  ngOnInit(): void {
    this.getEtudiants();
    this.getLocaux();
  }

  getEtudiants(): void{
    this.etudiantService.getEtudiants().subscribe(resultat => this.etudiants = resultat);
  }

  getLocaux(): void{
    this.localService.getLocaux().subscribe(result => this.locaux = result);
  }

  onAdd(reservationForm: NgForm){
    if(reservationForm.valid){
      this.reservationService.addReservation(this.model).subscribe();
    }
  }
}
