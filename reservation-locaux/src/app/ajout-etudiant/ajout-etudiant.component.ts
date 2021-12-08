import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantComponent } from '../etudiant/etudiant.component';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

  model: Etudiant = {nom: '', prenom: '', da: ''};

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
