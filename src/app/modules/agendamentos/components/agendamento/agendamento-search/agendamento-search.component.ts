import { AgendamentoGridDTO } from 'src/app/modules/agendamentos/models/agendamento-grid-dto.model';
import { AgendamentoFilter } from 'src/app/modules/agendamentos/models/agendamento-filter.model';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/modules/agendamentos/models/agendamento.model';
import { AgendamentoService } from 'src/app/modules/agendamentos/services/agendamento.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

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
    valorFim: null,
    page: 1,
    pageSize: 5
  }


  pageSizeOptions = [5, 10, 25, 100];
  length = 0;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.agendamentoFilter.pageSize = e.pageSize;
    this.agendamentoFilter.page = e.pageIndex+1;
    this.searchAgendamento();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  constructor(private agendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAgendamentoCreate(){
    this.router.navigate(['/agendamento/create']);
  }


  searchAgendamento() {
    this.agendamentoService.search(this.agendamentoFilter).subscribe(responseList => {
      this.agendamentosGridDTO = responseList.list
      this.length = responseList.total
      console.log(responseList.list)
  })}

  cancel() {
    this.router.navigate(['/agendamento'])
  }


}
