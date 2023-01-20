import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidade } from 'src/app/modules/agendamentos/models/especialidade.model';
import { EspecialidadeService } from 'src/app/modules/agendamentos/services/especialidade.service';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css']
})
export class EspecialidadeFormComponent implements OnInit {

  especialidade: Especialidade

  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadEspecialidade();
  }

  save(): void {
    if (this.especialidade.id){
      this.updateEspecialidade();
    }
    else {
      this.createEspecialidade();
    }
  }

  loadEspecialidade(): Especialidade {
    const id = +this.route.snapshot.paramMap.get('id')
    if (id) {
      this.especialidadeService.readById(id).subscribe((especialidade) => {
        this.especialidade = especialidade
      });
      return this.especialidade;
    }
    else {
      this.especialidade = {
        nome: "",
        descricao: ""
      }
      return this.especialidade;
    }
  }

  createEspecialidade(): void {
    this.especialidadeService.create(this.especialidade).subscribe(() => {
      this.especialidadeService.sucessMessage("Especialidade criada!")
      this.router.navigate(['/especialidade']);
    })
  }

  updateEspecialidade(): void {
    this.especialidadeService.update(this.especialidade).subscribe(() => {
      this.especialidadeService.sucessMessage("Especialidade atualizado com sucesso!")
      this.router.navigate(['/especialidade'])
    })
  }
  cancel(): void {
    this.router.navigate(['/especialidade'])
  }

}
