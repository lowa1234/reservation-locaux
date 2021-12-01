import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { EtudiantService } from './etudiant.service';
import { LocalService } from './local.service';
import { ReservationService } from './reservation.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { LocalComponent } from './local/local.component';
import { ListeLocalComponent } from './liste-local/liste-local.component';
import { AjoutLocalComponent } from './ajout-local/ajout-local.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ListeReservationComponent,
    ReservationComponent,
    AjoutReservationComponent,
    AjoutEtudiantComponent,
    EtudiantComponent,
    ListeEtudiantComponent,
    LocalComponent,
    ListeLocalComponent,
    AjoutLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [EtudiantService, LocalService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
