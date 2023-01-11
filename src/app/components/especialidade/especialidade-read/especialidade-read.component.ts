import { Router } from '@angular/router';
import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-read',
  templateUrl: './especialidade-read.component.html',
  styleUrls: ['./especialidade-read.component.css']
})
export class EspecialidadeReadComponent implements OnInit {

  especialidades: Especialidade[]
  displayedColumns = ['id', 'nome', 'descricao', 'acoes']

  constructor(private especialidadeService: EspecialidadeService, private router: Router) { }

  ngOnInit(): void {
    this.especialidadeService.read().subscribe(especialidades => {
      this.especialidades = especialidades
      console.log(especialidades)
    })
  }
  navigateToEspecialidadeCreate(){
    this.router.navigate(['/especialidade/create']);
  }
}
