import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from './local';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getLocaux(): Observable<Local[]>{
    return this.http.get<Local[]>(this.url + 'locaux');
  }

  deleteLocal(nom: string): Observable<Local>{
    return this.http.delete<Local>(this.url + 'locaux/' + nom, httpOptions);
  }
}
