import { Component, OnInit } from '@angular/core';
import { Local } from '../local';

@Component({
  selector: 'app-ajout-local',
  templateUrl: './ajout-local.component.html',
  styleUrls: ['./ajout-local.component.css']
})
export class AjoutLocalComponent implements OnInit {

  model: Local = {nom: '', aile: '', etage: '', nbmax: 0, nbreservation: 0, dispo: true};

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
