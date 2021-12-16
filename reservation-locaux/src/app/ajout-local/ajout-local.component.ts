import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Local } from '../local';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-ajout-local',
  templateUrl: './ajout-local.component.html',
  styleUrls: ['./ajout-local.component.css']
})
export class AjoutLocalComponent implements OnInit {

  model: Local = {nom: '', aile: '', etage: '', nbmax: 0, nbreservation: 0, dispo: true};

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
  }

  onAdd(etudiantForm: NgForm){
    if(etudiantForm.valid){
      this.localService.addLocal(this.model).subscribe();
    }
  }
}
