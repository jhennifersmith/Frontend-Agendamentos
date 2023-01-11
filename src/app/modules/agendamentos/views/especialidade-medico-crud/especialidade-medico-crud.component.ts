import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/modules/agendamentos/services/header.service';

@Component({
  selector: 'app-especialidade-medico-crud',
  templateUrl: './especialidade-medico-crud.component.html',
  styleUrls: ['./especialidade-medico-crud.component.css']
})
export class EspecialidadeMedicoCrudComponent implements OnInit {


  constructor(private router: Router, headerService: HeaderService){
    headerService.headerData = {
      title: 'Cadastro de Especialidade Médico',
      icon: '',
      routeUrl: '/especialidade-medico'
    }
  }
  ngOnInit(): void {
    
  }

  navigateToEspecialidadeMedicoCreate(){
    this.router.navigate(['/especialidade-medico/create']);
  }

}
