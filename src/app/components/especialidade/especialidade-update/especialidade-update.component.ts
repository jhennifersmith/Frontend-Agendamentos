import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from '../especialidade.model';
import { EspecialidadeService } from '../especialidade.service';

@Component({
  selector: 'app-especialidade-update',
  templateUrl: './especialidade-update.component.html',
  styleUrls: ['./especialidade-update.component.css']
})
export class EspecialidadeUpdateComponent implements OnInit {

  especialidade: Especialidade


  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.especialidadeService.readById(id).subscribe((especialidade) => {
      this.especialidade = especialidade
    });
  }

  updateEspecialidade(): void {
    this.especialidadeService.update(this.especialidade).subscribe(() => {
      this.especialidadeService.showMessage("Especialidade atualizado com sucesso!")
      this.router.navigate(['/especialidade'])
    })
  }
  cancel(): void {
    this.router.navigate(['/especialidade'])
  }

}
