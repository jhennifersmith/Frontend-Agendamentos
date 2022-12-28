import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { AgendamentoDTO } from '../agendamentoDTO.model';

@Component({
  selector: 'app-agendamento-update',
  templateUrl: './agendamento-update.component.html',
  styleUrls: ['./agendamento-update.component.css']
})
export class AgendamentoUpdateComponent implements OnInit  {

  agendamentoDTO: AgendamentoDTO
  agendamento: Agendamento


  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.agendamentoService.readById(id).subscribe((agendamentoDTO) => {
      this.agendamentoDTO = agendamentoDTO
      console.log(this.agendamento)
    });
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
