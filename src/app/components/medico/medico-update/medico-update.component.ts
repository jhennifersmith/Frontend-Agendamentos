import { MedicoService } from './../medico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medico.model';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {

  medicoFormGroup!: FormGroup;
  medico?: Medico;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private medicoService: MedicoService, private router: Router) { };

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
      id:[''],
      crm: [''],
      dataCriacao: [''],
      dataExclusao: ['']
    });
  }

  updateMedico() {
    console.log(this.medicoFormGroup.value);
    this.medicoService.update(this.medicoFormGroup.value).subscribe(() => {
      this.medicoService.showMessage('medico atualizado!')
      this.router.navigate(['/medico']);

    })
  }

  cancel() {
    this.router.navigate(['/medico'])
  }

}
