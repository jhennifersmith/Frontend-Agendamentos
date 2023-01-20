import { ListResponse } from './../models/list-response.model';
import { EspecialidadeMedicoDTO } from '../models/especialidade-medico-dto.model';
import { EspecialidadeMedico } from '../models/especialidade-medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { EspecialidadeMedicoFilter } from '../models/especialidade-medico-filter.model';
import { EspecialidadeMedicoGridDTO } from '../models/especialidade-medico-grid-dto.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeMedicoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade-medico'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(especialidadeMedicoDTO: EspecialidadeMedicoDTO): Observable<EspecialidadeMedicoDTO> {
    return this.http.post<EspecialidadeMedicoDTO>(this.baseUrl, especialidadeMedicoDTO).pipe(
      catchError( e => this.errorHandler(e))
    );
  }
  read(): Observable<EspecialidadeMedico[]> {
    return this.http.get<EspecialidadeMedico[]>(this.baseUrl).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<EspecialidadeMedico>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<EspecialidadeMedico>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  search(especialidadeMedicoFilter: EspecialidadeMedicoFilter): Observable<ListResponse<EspecialidadeMedicoGridDTO>> {
    const url = `${this.baseUrl}/search`
    return this.http.post<ListResponse<EspecialidadeMedicoGridDTO>>(url, especialidadeMedicoFilter).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  sucessMessage(msg: string){
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: msg,
      width: 600,
      padding: '3em',
      color: '#000',
      background: '#fff',
      confirmButtonColor: '#000',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.tenor.com/cybdHYBCerIAAAAj/pokemon-charmander.gif")
        left top
        no-repeat
      `
    })
    return EMPTY
  }

  errorHandler(e: any): Observable<any> {
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: e.error,
      width: 600,
      padding: '3em',
      color: '#000',
      background: '#fff',
      confirmButtonColor: '#000',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.tenor.com/cybdHYBCerIAAAAj/pokemon-charmander.gif")
        left top
        no-repeat
      `
    })
    return EMPTY
  }

}
