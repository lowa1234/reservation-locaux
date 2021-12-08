import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';

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
}

