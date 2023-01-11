import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router'
import { HeaderService } from 'src/app/modules/agendamentos/services/header.service';

@Component({
  selector: 'app-especialidade-crud',
  templateUrl: './especialidade-crud.component.html',
  styleUrls: ['./especialidade-crud.component.css']
})
export class EspecialidadeCrudComponent implements OnInit{

  constructor(private router: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de especialidade',
      icon: '',
      routeUrl: '/especialidade'
    }
  }

  ngOnInit(): void {
    
  }

  navigateToEspecialidadeCreate(){
    this.router.navigate(['/especialidade/create']);
  }
}
