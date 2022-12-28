import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendamentoService } from '../agendamento.service';
import { AgendamentoDTO } from '../agendamentoDTO.model';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})
export class AgendamentoCreateComponent implements OnInit {
  agendamentoDTO: AgendamentoDTO = {
    clienteId: null,
    medicoId: null,
    status: null,
    valor: null,
    dataAbertura: null,
    dataConsulta: null
  }

  constructor(private agendamentoService: AgendamentoService, private router: Router){ }

  ngOnInit(): void {
    
  }

  createAgendamento(): void {
    this.agendamentoService.create(this.agendamentoDTO).subscribe( () => {
      this.agendamentoService.showMessage('Agendamento criado!')
      this.router.navigate(['/agendamento']);
    })
  }

  cancel(): void {
    this.router.navigate(['/agendamento'])
  }
}
