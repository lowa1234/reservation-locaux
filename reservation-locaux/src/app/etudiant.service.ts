import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from './etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url + 'etudiants');
  }
}
