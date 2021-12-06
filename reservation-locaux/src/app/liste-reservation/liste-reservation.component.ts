import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  displayedColumns: string[] = ['nom_local', 'da_etudiant', 'heure_debut', 'heure_fin'];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void{
    this.reservationService.getLocaux().subscribe(resultat => this.reservations = resultat);
  }
}
