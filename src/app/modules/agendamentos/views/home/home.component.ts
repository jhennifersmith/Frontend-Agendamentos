import { HeaderService } from 'src/app/modules/agendamentos/services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: 'Página Inicial',
      icon: '',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    
  }

}
