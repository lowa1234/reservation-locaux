import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from './local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getLocaux(): Observable<Local[]>{
    return this.http.get<Local[]>(this.url + 'locaux');
  }
}
