import { Component, OnInit } from '@angular/core';
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
    dataCriacaoInicio: ""
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
