import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { NbReservationEtudiant } from '../nb-reservation-etudiant';
import { NbReservationLocal } from '../nb-reservation-local';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  displayedColumns: string[] = ['nom_local', 'da_etudiant', 'date', 'heure_debut', 'heure_fin', 'delete'];
  
  nbParEtudiant: NbReservationEtudiant[] = [];
  displayedColumnsEtudiant: string[] = ['da_etudiant', 'nb'];
  
  nbParLocal: NbReservationLocal[] = [];
  displayedColumnsLocal: string[] = ['nom_local', 'nb'];


  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
    this.getNbParEtudiant();
    this.getNbParLocal();
  }

  getReservations(): void{
    this.reservationService.getLocaux().subscribe(resultat => this.reservations = resultat);
  }

  getNbParEtudiant(): void{
    this.reservationService.getNbParEtudiant().subscribe(resultat => this.nbParEtudiant = resultat);
  }
  
  getNbParLocal(): void{
    this.reservationService.getNbParLocal().subscribe(resultat => this.nbParLocal = resultat);
  }

  onDelete(reservation: Reservation): void{
    if(reservation._id){
      this.reservationService.deleteReservation(reservation._id).subscribe(result => this.reservations = this.reservations.filter(r => r !== reservation));
    }
  }
}
