import { EspecialidadeMedicoGridDTO } from './../especialidade-medico-dto.model';
import { EspecialidadeMedicoFilter } from './../especialidade-medico-filter.model';
import { EspecialidadeMedicoService } from './../especialidade-medico.service';
import { EspecialidadeMedico } from './../especialidade-medico.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-medico-search',
  templateUrl: './especialidade-medico-search.component.html',
  styleUrls: ['./especialidade-medico-search.component.css']
})
export class EspecialidadeMedicoSearchComponent implements OnInit {

  especialidadeMedicoFormGroup!: FormGroup;

  especialidadeMedicosGridDTO: EspecialidadeMedicoGridDTO[];

  especialidadeMedicoFilter: EspecialidadeMedicoFilter;

  constructor(
    private fb: FormBuilder, 
    private especialidadeMedicoService: EspecialidadeMedicoService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForm(new EspecialidadeMedicoFilter());

  }

  get idMedico() {
    return this.especialidadeMedicoFormGroup.get('idMedicos') as FormArray;
  }
  get idEspecialidade() {
    return this.especialidadeMedicoFormGroup.get('idEspecialidades') as FormArray;
  }

  createForm(especialidadeMedicoFilter: EspecialidadeMedicoFilter) {
    this.especialidadeMedicoFormGroup = this.fb.group({
      idMedicos: this.fb.array([]),
      idEspecialidades: this.fb.array([])
    });
  }

  adicionarAoArray(idMedico: number) {
    this.idMedico.push(
      this.fb.group({
        idMedico: idMedico
      })
    );
  }
  adicionarAoArrayIdEspecialidade(idEspecialidade: number) {
    this.idEspecialidade.push(
      this.fb.group({
        idEspecialidade: idEspecialidade
      })
    );
  }

  searchEspecialidadeMedico() {
    this.especialidadeMedicoService.search(this.especialidadeMedicoFilter).subscribe(especialidadeMedicosGridDTO => {
      this.especialidadeMedicosGridDTO = especialidadeMedicosGridDTO
      console.log(this.especialidadeMedicosGridDTO)
  })}

  navigateToEspecialidadeMedicoCreate(){
    this.router.navigate(['/especialidade-medico/create']);
  }

  cancel() {
    this.router.navigate(['/cliente'])
  }

}
