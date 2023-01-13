import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/agendamentos/models/cliente.model';
import { ClienteFilter } from 'src/app/modules/agendamentos/models/cliente-filter.model';
import { ClienteService } from 'src/app/modules/agendamentos/services/cliente.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styleUrls: ['./cliente-search.component.css']
})
export class ClienteSearchComponent implements OnInit {
  
  clientes:Cliente[]
  displayedColumns = ['id', 'nome' , 'cpf', 'sexo', 'dataCriacao', 'dataExclusao', 'acoes']

  clienteFilter: ClienteFilter = {
    nome: "",
    cpf: "",
    sexo: null,
    dataCriacaoInicio: "",
    dataCriacaoFim: "",
    pageSize: 5,
    page: 1
  }

  pageSizeOptions = [5, 10, 25];
  length = 50;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.clienteFilter.pageSize = e.pageSize;
    this.clienteFilter.page = e.pageIndex+1;
    this.searchCliente()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.searchCliente();
  }
  
  navigateToClienteCreate(){
    this.router.navigate(['/cliente/create']);
  }
  searchCliente() {
    this.clienteService.search(this.clienteFilter).subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
  })}

  cancel() {
    this.router.navigate(['/cliente'])
  }
}
