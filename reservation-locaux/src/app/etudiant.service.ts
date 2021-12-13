import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from './etudiant';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url + 'etudiants');
  }

  deleteEtudiant(da: string): Observable<Etudiant>{
    return this.http.delete<Etudiant>(this.url + 'etudiants/' + da, httpOptions);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    return this.http.post<Etudiant>(this.url + 'etudiants', etudiant, httpOptions);
  }
}
