import { Pessoa } from './../pessoa.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  clienteFormGroup!: FormGroup;

  cliente?: Cliente;

  constructor(
    private fb: FormBuilder, 
    private clienteService: ClienteService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  get telefone() {
    return this.clienteFormGroup.get('telefones') as FormArray;
  }
  get email() {
    return this.clienteFormGroup.get('emails') as FormArray;
  }

  createForm(cliente: Cliente) {
    this.clienteFormGroup = this.fb.group({
      pessoa: this.fb.group({
        nome: [''],
        dataNascimento: [''],
        sexo: [''],
        cpf: [''],
        altura: [''],
        peso: ['']
      }),
      telefones: this.fb.array([]),
      emails: this.fb.array([]),
      dataCriacao: [''],
      dataExclusao: ['']
    });
  }

  adicionarAoArray(numero: string) {
    this.telefone.push(
      this.fb.group({
        numero: numero
      })
    );
  }
  adicionarAoArrayEmail(endereco: string) {
    this.email.push(
      this.fb.group({
        endereco: endereco
      })
    );
  }

  createCliente() {
    console.log(this.clienteFormGroup.value);
    this.clienteService.create(this.clienteFormGroup.value).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!')
      this.router.navigate(['/cliente']);

    })
  }

  cancel() {
    this.router.navigate(['/cliente'])
  }

}
