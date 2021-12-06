import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];
  displayedColumns: string[] = ['nom', 'prenom', 'da'];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void{
    this.etudiantService.getEtudiants().subscribe(resultat => this.etudiants = resultat);
  }
}
