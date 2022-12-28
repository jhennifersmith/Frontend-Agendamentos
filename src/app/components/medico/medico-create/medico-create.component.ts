import { MedicoService } from './../medico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../medico.model';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  medicoFormGroup!: FormGroup;
  medico?: Medico;

  constructor(private fb: FormBuilder, private medicoService: MedicoService, private router: Router) { };

  ngOnInit(): void {
    this.createForm(new Medico());
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
      crm: [''],
      dataCriacao: [''],
      dataExclusao: ['']
    });
  }

  createMedico() {
    console.log(this.medicoFormGroup.value);
    this.medicoService.create(this.medicoFormGroup.value).subscribe(() => {
      this.medicoService.showMessage('medico criado!')
      this.router.navigate(['/medico']);

    })
  }

  cancel() {
    this.router.navigate(['/medico'])
  }

}
