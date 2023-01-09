import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { AgendamentoDTO } from '../agendamentoDTO.model';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  agendamentoDTO: AgendamentoDTO
  agendamento: Agendamento
  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadAgendamento();
  }

  loadAgendamento(): AgendamentoDTO {
    const id = +this.route.snapshot.paramMap.get('id')
    if (id) {
      this.agendamentoService.readById(id).subscribe((agendamentoDTO) => {
        this.agendamentoDTO = agendamentoDTO
        console.log(this.agendamento)
      })
      return this.agendamentoDTO;
    }
    else{
      this.agendamentoDTO = {
        clienteId: null,
        medicoId: null,
        status: null,
        valor: null,
        dataAbertura: null,
        dataConsulta: null
      }
      return this.agendamentoDTO;
    }
  }

  save(): void {
    if (this.agendamentoDTO.id) {
      this.updateAgendamento();
    }
    else {
      this.createAgendamento();
    }
  }

  createAgendamento(): void {

    this.agendamentoService.create(this.agendamentoDTO).subscribe(() => {
      this.agendamentoService.showMessage('Agendamento criado!')
      this.router.navigate(['/agendamento']);
    })
  }

  updateAgendamento(): void {
    this.agendamentoService.update(this.agendamentoDTO).subscribe(() => {
      this.agendamentoService.showMessage("Agendamento atualizado com sucesso!")
      this.router.navigate(['/agendamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/agendamento'])
  }
}
