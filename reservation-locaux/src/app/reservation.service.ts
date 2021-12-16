import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';
import { NbReservationEtudiant } from './nb-reservation-etudiant';
import { NbReservationLocal } from './nb-reservation-local';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getLocaux(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.url + 'reservations');
  }

  deleteReservation(id: string): Observable<Reservation>{
    return this.http.delete<Reservation>(this.url + 'reservations/' + id, httpOptions);
  }

  getNbParEtudiant(): Observable<NbReservationEtudiant[]>{
    return this.http.get<NbReservationEtudiant[]>(this.url + 'reservations/nb-par-etudiant')
  }
  
  getNbParLocal(): Observable<NbReservationLocal[]>{
    return this.http.get<NbReservationLocal[]>(this.url + 'reservations/nb-par-local')
  }
}

