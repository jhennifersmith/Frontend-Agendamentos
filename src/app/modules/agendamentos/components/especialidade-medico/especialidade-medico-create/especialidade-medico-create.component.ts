import { EspecialidadeMedicoDTO } from 'src/app/modules/agendamentos/models/especialidade-medico-dto.model';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeMedicoService } from 'src/app/modules/agendamentos/services/especialidade-medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-medico-create',
  templateUrl: './especialidade-medico-create.component.html',
  styleUrls: ['./especialidade-medico-create.component.css']
})
export class EspecialidadeMedicoCreateComponent implements OnInit{
  
  especialidadeMedicoDTO: EspecialidadeMedicoDTO = {
    medicoId: null,
    especialidadeId: null
  }
  
  constructor(private especialidadeMedicoService: EspecialidadeMedicoService, private router: Router){}

  ngOnInit(): void {
    
  }
  
  createEspecialidadeMedico(): void {
    this.especialidadeMedicoService.create(this.especialidadeMedicoDTO).subscribe( () => {
      this.especialidadeMedicoService.sucessMessage("Especialidade criada!")
      this.router.navigate(['/especialidade-medico']);
    })
  }
  cancel(): void {
    this.router.navigate(['/especialidade-medico'])
  }
}
