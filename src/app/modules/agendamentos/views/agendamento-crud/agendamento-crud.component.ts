import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-agendamento-crud',
  templateUrl: './agendamento-crud.component.html',
  styleUrls: ['./agendamento-crud.component.css']
})
export class AgendamentoCrudComponent implements OnInit{

  constructor(headerService: HeaderService){
    headerService.headerData = {
      title: 'Agendamentos',
      icon: '',
      routeUrl: '/agendamentos'
    }
  }

  ngOnInit(): void {
  
}
}
