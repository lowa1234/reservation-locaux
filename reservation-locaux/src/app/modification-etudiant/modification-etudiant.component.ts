import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-modification-etudiant',
  templateUrl: './modification-etudiant.component.html',
  styleUrls: ['./modification-etudiant.component.css']
})
export class ModificationEtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];

  model: Etudiant = {nom: '', prenom: '', da: ''};

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void{
    this.etudiantService.getEtudiants().subscribe(resultat => this.etudiants = resultat);
  }

  onEdit(etudiantForm: NgForm):void{

  }
}
