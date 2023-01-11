import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {

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
    this.loadCliente();
  }

  loadCliente(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    if (id) {
      this.medicoService.readById(id).subscribe((medico) => {
        this.medico = medico;
        this.medicoFormGroup.patchValue(medico);
      })
      return this.medicoFormGroup.value;
    }
    else {
      return this.medicoFormGroup.value;
    }
  }

  save (){
    if (this.medicoFormGroup.value.id){
      this.updateMedico();
    }
    else {
      this.createMedico();
    }
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


  createMedico() {
    console.log(this.medicoFormGroup.value);
    this.medicoService.create(this.medicoFormGroup.value).subscribe(() => {
      this.medicoService.showMessage('medico criado!')
      this.router.navigate(['/medico']);
    })
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
