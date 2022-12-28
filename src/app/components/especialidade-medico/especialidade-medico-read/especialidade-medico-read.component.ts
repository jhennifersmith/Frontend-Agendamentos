import { EspecialidadeMedico } from './../especialidade-medico.model';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeMedicoService } from '../especialidade-medico.service';

@Component({
  selector: 'app-especialidade-medico-read',
  templateUrl: './especialidade-medico-read.component.html',
  styleUrls: ['./especialidade-medico-read.component.css']
})
export class EspecialidadeMedicoReadComponent implements OnInit {

  especialidadesMedicos: EspecialidadeMedico[]
  displayedColumns = ['id', 'medicoId', 'especialidadeId', 'acoes']
  constructor(private especialidadeMedicoService: EspecialidadeMedicoService) { }

  ngOnInit(): void {
    this.especialidadeMedicoService.read().subscribe(especialidadesMedicos => {
      this.especialidadesMedicos = especialidadesMedicos
      console.log(especialidadesMedicos)
    })
  }

}
