import { EspecialidadeService } from './../especialidade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from '../especialidade.model';

@Component({
  selector: 'app-especialidade-create',
  templateUrl: './especialidade-create.component.html',
  styleUrls: ['./especialidade-create.component.css']
})
export class EspecialidadeCreateComponent implements OnInit {

  especialidade: Especialidade = {
    nome: "",
    descricao: ""
  }

  constructor(private especialidadeService: EspecialidadeService, private router: Router){ }

  ngOnInit(): void {
    
  }

  createEspecialidade(): void {
    this.especialidadeService.create(this.especialidade).subscribe( () => {
      this.especialidadeService.showMessage('Especialidade criada!')
      this.router.navigate(['/especialidade']);
    })
  }

  cancel(): void {
    this.router.navigate(['/especialidade'])
  }
}
