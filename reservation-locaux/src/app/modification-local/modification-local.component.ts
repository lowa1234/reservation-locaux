import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Local } from '../local';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-modification-local',
  templateUrl: './modification-local.component.html',
  styleUrls: ['./modification-local.component.css']
})
export class ModificationLocalComponent implements OnInit {
  locaux: Local[] = [];

  model: Local = {nom: '', aile: '', etage: '', nbmax: 0, nbreservation: 0, dispo: true};
  
  local: Local = {nom: '', aile: '', etage: '', nbmax: 0, nbreservation: 0, dispo: true};

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.getLocaux();
  }

  getLocaux(): void{
    this.localService.getLocaux().subscribe(result => this.locaux = result);
  }

  getLocal():void{
    console.log(this.model.nom);this.localService.getLocal(this.model.nom).subscribe(resultat => this.local = resultat);
  }

  onEdit(localForm: NgForm):void{
    if(localForm.valid){
      this.localService.updateLocal(this.model).subscribe();
    }
  }
}
