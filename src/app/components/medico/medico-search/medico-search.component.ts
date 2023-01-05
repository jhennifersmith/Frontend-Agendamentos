import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MedicoFilter } from '../medico-filter.model';
import { Medico } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-search',
  templateUrl: './medico-search.component.html',
  styleUrls: ['./medico-search.component.css']
})
export class MedicoSearchComponent implements OnInit {
  
  medicos:Medico[]
  displayedColumns = ['id', 'nome' , 'cpf', 'sexo', 'dataCriacao', 'dataExclusao', 'acoes']
  
  medicoFilter: MedicoFilter = {
    nome: "",
    cpf: "",
    sexo: null,
    dataCriacaoInicio: "",
    page: 1,
    pageSize: 10

  }
  
  pageSizeOptions = [5, 10, 25];
  length = 50;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.medicoFilter.pageSize = e.pageSize;
    this.medicoFilter.page = e.pageIndex+1;
    this.searchMedico();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  constructor(private medicoService: MedicoService, private router: Router){}
  
  navigateToMedicoCreate(){
    this.router.navigate(['/medico/create']);
  }

  searchMedico() {
    this.medicoService.search(this.medicoFilter).subscribe(medicos => {
      this.medicos = medicos
      console.log(medicos)
  })}

  ngOnInit(): void {
    
  }
}
