import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/modules/agendamentos/models/medico.model';
import { MedicoService } from 'src/app/modules/agendamentos/services/medico.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {

  medicoFormGroup!: FormGroup;
  medico?: Medico;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm(new Medico());
    const id = +this.route.snapshot.paramMap.get('id')
    this.medicoService.readById(id).subscribe((medico) => {
      this.medico = medico;
      this.medicoFormGroup.patchValue(medico);
    })
  }

  createForm(medico: Medico) {
    this.medicoFormGroup = this.fb.group({
      pessoa: this.fb.group({
        nome: [''],
        dataNascimento: [''],
        sexo: [''],
        cpf: [''],
        altura: [''],
        peso: ['']
      }),
      id: [''],
      crm: [''],
      dataCriacao: [''],
      dataExclusao: ['']
    });
  }

  deleteMedico() {
    console.log(this.medicoFormGroup.value);
    this.medicoService.delete(this.medico.id).subscribe(() => {
      this.medicoService.sucessMessage("Médico deletado!")
      this.router.navigate(['/medico']);

    })
  }

  cancel() {
    this.router.navigate(['/medico'])
  }


}
