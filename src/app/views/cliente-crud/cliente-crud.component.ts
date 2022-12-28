import { HeaderService } from 'src/app/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService){
    headerService.headerData = {
      title: 'Cadastro cliente',
      icon: '',
      routeUrl: '/cliente'
    }
  }

  ngOnInit(): void {
    
  }

  navigateToClienteCreate(){
    this.router.navigate(['/cliente/create']);
  }

}
