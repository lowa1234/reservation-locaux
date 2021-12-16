import { Component, OnInit } from '@angular/core';
import { Local } from '../local';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-liste-local',
  templateUrl: './liste-local.component.html',
  styleUrls: ['./liste-local.component.css']
})
export class ListeLocalComponent implements OnInit {
  locaux: Local[] = [];
  displayedColumns: string[] = ['nom', 'nbmax', 'nbreservation', 'dispo', 'delete'];

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.getLocaux();
  }

  getLocaux(): void{
    this.localService.getLocaux().subscribe(resultat => this.locaux = resultat);
  }

  onDelete(local: Local): void{
    if(local.nom){
      this.localService.deleteLocal(local.nom).subscribe(result => this.locaux = this.locaux.filter(l => l !== local));
    }
  }
}
