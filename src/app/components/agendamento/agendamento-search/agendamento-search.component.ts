import { AgendamentoGridDTO } from './../agendamento-grid-dto.model';
import { AgendamentoFilter } from './../agendamento-filter.model';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento-search',
  templateUrl: './agendamento-search.component.html',
  styleUrls: ['./agendamento-search.component.css']
})
export class AgendamentoSearchComponent implements OnInit{

  agendamentosGridDTO:AgendamentoGridDTO[]
  agendamentos: Agendamento[]
  displayedColumns = ['idAgendamento', 'idCliente' ,'nomeCliente', 'idMedico','nomeMedico', 'dataAbertura', 'dataAtendimento', 'valor', 'acoes']

  agendamentoFilter: AgendamentoFilter = {
    nomeCliente: "",
    nomeMedico: "",
    dataAberturaInicio: null,
    dataAberturaFim: null,
    dataConsultaInicio: null,
    dataConsultaFim: null,
    valorInicio: null,
    valorFim: null
  }

  constructor(private agendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  navigateToAgendamentoCreate(){
    this.router.navigate(['/agendamento/create']);
  }
  searchAgendamento() {
    this.agendamentoService.search(this.agendamentoFilter).subscribe(agendamentosGridDTO => {
      this.agendamentosGridDTO = agendamentosGridDTO
      console.log(agendamentosGridDTO)
  })}

  cancel() {
    this.router.navigate(['/agendamento'])
  }


}
