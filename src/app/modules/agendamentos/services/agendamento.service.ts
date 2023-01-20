import { ListResponse } from './../models/list-response.model';
import { AgendamentoGridDTO } from '../models/agendamento-grid-dto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';
import { AgendamentoFilter } from '../models/agendamento-filter.model';
import { Agendamento } from '../models/agendamento.model';
import { AgendamentoDTO } from '../models/agendamentoDTO.model';
import  Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/agendamento'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  create(agendamentoDTO: AgendamentoDTO): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.baseUrl, agendamentoDTO).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.baseUrl).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<AgendamentoDTO> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Agendamento>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  update(agendamentoDTO: AgendamentoDTO): Observable<Agendamento> {
    const url = `${this.baseUrl}/`
    return this.http.put<Agendamento>(url, agendamentoDTO).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  search(agendamentoFilter: AgendamentoFilter): Observable<ListResponse<AgendamentoGridDTO>> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<ListResponse<AgendamentoGridDTO>>(url, agendamentoFilter).pipe(
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
