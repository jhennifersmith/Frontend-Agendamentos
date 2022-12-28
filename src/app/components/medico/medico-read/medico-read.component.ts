import { MedicoService } from './../medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico.model';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {
  
  medicos: Medico[];
  displayedColumns = ['id', 'pessoa' , 'dataCriacao', 'acoes']

  constructor(private medicoService: MedicoService){}
  
  ngOnInit(): void {
    this.medicoService.read().subscribe(medicos => {
      this.medicos = medicos
      console.log(medicos)
    })
  }

}
