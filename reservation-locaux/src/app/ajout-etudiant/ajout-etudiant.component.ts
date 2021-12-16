import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

  model: Etudiant = {nom: '', prenom: '', da: ''};

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }

  onAdd(etudiantForm: NgForm){
    if(etudiantForm.valid){
      this.etudiantService.addEtudiant(this.model).subscribe();
    }
  }
}
