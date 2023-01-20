import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/modules/agendamentos/models/especialidade.model';
import { EspecialidadeService } from 'src/app/modules/agendamentos/services/especialidade.service';

@Component({
  selector: 'app-especialidade-delete',
  templateUrl: './especialidade-delete.component.html',
  styleUrls: ['./especialidade-delete.component.css']
})
export class EspecialidadeDeleteComponent implements OnInit {
  especialidade: Especialidade

  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.especialidadeService.readById(id).subscribe(especialidade => {
      this.especialidade = especialidade
    })
  }

  deleteEspecialidade(): void {
    this.especialidadeService.delete(this.especialidade.id).subscribe(() => {
      this.especialidadeService.sucessMessage('Especialidade excluída com sucesso!')
      this.router.navigate(['/especialidade'])
    })
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}
