import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AjoutReservationComponent } from './ajout-reservation/ajout-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeReservationComponent,
    ReservationComponent,
    AjoutReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
