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

  etudiant: Etudiant = {nom: '', prenom: '', da: ''};

  model: Etudiant = {nom: '', prenom: '', da: ''};

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void{
    this.etudiantService.getEtudiants().subscribe(resultat => this.etudiants = resultat);
  }

  getEtudiant():void{
    this.etudiantService.getEtudiant(this.model.da).subscribe(resultat => this.etudiant = resultat);
  }

  onEdit(etudiantForm: NgForm):void{
    if(etudiantForm.valid){
      this.etudiantService.updateEtudiant(this.model).subscribe();
    }
  }
}
