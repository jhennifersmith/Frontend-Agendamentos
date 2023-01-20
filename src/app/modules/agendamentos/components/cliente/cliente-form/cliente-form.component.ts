import { Email } from './../../../models/email.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {


  clienteFormGroup!: FormGroup;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm(new Cliente());
    this.loadCliente();
  }

save(){
  if (this.clienteFormGroup.value.id) {
    this.updateCliente();
  }
  else {
    this.createCliente();
  }
}

loadCliente(): void {
  const id = +this.route.snapshot.paramMap.get('id')
    if(id) {
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
      this.clienteFormGroup.patchValue(cliente);
      this.cliente.telefones.map((telefone) => this.adicionarAoArray(telefone.numero));
      this.cliente.emails.map((email) => this.adicionarAoArrayEmail(email.endereco));
    })
    return this.clienteFormGroup.value;
  }
    else {
    return this.clienteFormGroup.value;
  }
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
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', Validators.required],
      sexo: [null, Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
    }),
    id: [''],
    teste: ['', [Validators.email, Validators.minLength(4)]],
    telefones: this.fb.array([], [Validators.required]),
    emails: this.fb.array([]),
    dataCriacao: ['', Validators.required],
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

removeTelefone(indiceTelefone: number) {
  this.telefone.removeAt(indiceTelefone);
}

adicionarAoArrayEmail(endereco: string) {
  this.email.push(
    this.fb.group({
      endereco: endereco
    })
  );
}

removeEmail(indiceEmail: number) {
  this.email.removeAt(indiceEmail);
}


updateCliente(): void {
  this.clienteService.update(this.clienteFormGroup.value).subscribe(() => {
    this.clienteService.sucessMessage("Cliente atualizado com sucesso!")
    this.router.navigate(['/cliente'])
  })
}

createCliente() {
  console.log(this.clienteFormGroup.value);
  this.clienteService.create(this.clienteFormGroup.value).subscribe(() => {
    this.clienteService.sucessMessage("Cliente criado!")
    this.router.navigate(['/cliente'])
  });
}

cancel(): void {
  this.router.navigate(['/cliente'])
}

}


