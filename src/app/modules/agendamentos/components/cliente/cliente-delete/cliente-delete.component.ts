import { ClienteService } from 'src/app/modules/agendamentos/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modules/agendamentos/models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  clienteFormGroup!: FormGroup;
  cliente: Cliente;

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Cliente());
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente;
      this.clienteFormGroup.patchValue(cliente);
    })
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
      dataCriacao: [''],
      dataExclusao: ['']
    });
  }
  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.sucessMessage('Cliente excluído com sucesso!')
      this.router.navigate(['/cliente'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }

}
