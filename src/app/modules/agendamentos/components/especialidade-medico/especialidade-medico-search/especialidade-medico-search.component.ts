import { EspecialidadeMedicoGridDTO } from 'src/app/modules/agendamentos/models/especialidade-medico-grid-dto.model';
import { EspecialidadeMedicoFilter } from 'src/app/modules/agendamentos/models/especialidade-medico-filter.model';
import { EspecialidadeMedicoService } from 'src/app/modules/agendamentos/services/especialidade-medico.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { EspecialidadeMedicoDTO } from '../../../models/especialidade-medico-dto.model';

@Component({
  selector: 'app-especialidade-medico-search',
  templateUrl: './especialidade-medico-search.component.html',
  styleUrls: ['./especialidade-medico-search.component.css']
})
export class EspecialidadeMedicoSearchComponent implements OnInit {

  especialidadeMedicoFormGroup!: FormGroup;

  especialidadeMedicosGridDTO: EspecialidadeMedicoGridDTO[];

  especialidadeMedicoFilter: EspecialidadeMedicoFilter;

  especialidadeMedicosDTO: EspecialidadeMedicoDTO[];

  displayedColumns = ['idEspecialidade', 'descricao', 'idMedico', 'nomeMedico', 'acoes']
  constructor(
    private fb: FormBuilder,
    private especialidadeMedicoService: EspecialidadeMedicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm(new EspecialidadeMedicoFilter());
    this.especialidadeMedicoFilter = new EspecialidadeMedicoFilter()
    this.especialidadeMedicoFilter.idMedicos = new Array<number>();
    this.especialidadeMedicoFilter.idEspecialidades = new Array<number>();
    
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
      idEspecialidades: this.fb.array([]),
      page: 1,
      pageSize: 5
    });
  }

  pageSizeOptions = [5, 10, 25];
  length = 0;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.especialidadeMedicoFilter.pageSize = e.pageSize;
    this.especialidadeMedicoFilter.page = e.pageIndex+1;
    this.searchEspecialidadeMedico();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  adicionarAoArray(idMedico: number) {
    this.idMedico.push(
      this.fb.group({
        idMedico: idMedico
      })
    );
    this.especialidadeMedicoFilter.idMedicos.push(idMedico);
  }
  adicionarAoArrayIdEspecialidade(idEspecialidade: number) {
    this.idEspecialidade.push(
      this.fb.group({
        idEspecialidade: idEspecialidade
      })
    );
    this.especialidadeMedicoFilter.idEspecialidades.push(idEspecialidade);
  }

  searchEspecialidadeMedico() {
    console.log(this.especialidadeMedicoFilter)
    this.especialidadeMedicoService.search(this.especialidadeMedicoFilter).subscribe(listResponse => {
      this.especialidadeMedicosGridDTO = listResponse.list
      this.length = listResponse.total
    })
  }

  navigateToEspecialidadeMedicoCreate() {
    this.router.navigate(['/especialidade-medico/create']);
  }

  cancel() {
    this.router.navigate(['/cliente'])
  }

}
