import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit{
  
  clienteFormGroup!: FormGroup;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){}
  
  ngOnInit(): void {
    this.createForm(new Cliente());
    const id = +this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente; 
      this.clienteFormGroup.patchValue(cliente);
      this.cliente.telefones.map((telefone) => this.adicionarAoArray(telefone.numero));
      this.cliente.emails.map((email) => this.adicionarAoArrayEmail(email.endereco));
  })
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
    id: [''],
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

updateCliente(): void {
  this.clienteService.update(this.clienteFormGroup.value).subscribe(() => {
    this.clienteService.showMessage("Cliente atualizado com sucesso!")
    this.router.navigate(['/cliente'])
  })
}

cancel(): void {
  this.router.navigate(['/cliente'])
}

}
