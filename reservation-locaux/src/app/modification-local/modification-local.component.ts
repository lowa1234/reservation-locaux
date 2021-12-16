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

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.getLocaux();
  }

  getLocaux(): void{
    this.localService.getLocaux().subscribe(result => this.locaux = result);
  }

  onEdit(localForm: NgForm):void{
    
  }
}
