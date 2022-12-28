import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-medico-crud',
  templateUrl: './medico-crud.component.html',
  styleUrls: ['./medico-crud.component.css']
})
export class MedicoCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService){
    headerService.headerData = {
      title: 'Cadastro de médico',
      icon: '',
      routeUrl: '/especialidade'
    }
  }

  ngOnInit(): void {
    
  }
  
  navigateToMedicoCreate() {
    this.router.navigate(['/medico/create']);
  }

}
