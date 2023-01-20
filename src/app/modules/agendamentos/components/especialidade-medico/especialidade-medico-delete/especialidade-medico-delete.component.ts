import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadeMedicoService } from 'src/app/modules/agendamentos/services/especialidade-medico.service';
import { EspecialidadeMedico } from 'src/app/modules/agendamentos/models/especialidade-medico.model';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeMedicoDTO } from 'src/app/modules/agendamentos/models/especialidade-medico-dto.model';

@Component({
  selector: 'app-especialidade-medico-delete',
  templateUrl: './especialidade-medico-delete.component.html',
  styleUrls: ['./especialidade-medico-delete.component.css']
})
export class EspecialidadeMedicoDeleteComponent implements OnInit {
  especialidadeMedico: EspecialidadeMedico
  especialidadeMedicoDTO: EspecialidadeMedicoDTO

  constructor(
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.especialidadeMedicoService.readById(id).subscribe(especialidadeMedico => {
      this.especialidadeMedicoDTO = especialidadeMedico
    })
  }

  deleteEspecialidadeMedico(): void {
    this.especialidadeMedicoService.delete(this.especialidadeMedicoDTO.id).subscribe(() => {
      this.especialidadeMedicoService.sucessMessage("Especialidade médico excluída com sucesso!")
      this.router.navigate(['/especialidade-medico'])
    })
  }

  cancel(): void {
    this.router.navigate(['/especialidade-medico']);
  }

}
