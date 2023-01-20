import { ListResponse } from './../models/list-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { MedicoFilter } from 'src/app/modules/agendamentos/models/medico-filter.model';
import { Medico } from '../models/medico.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseUrl = 'http://localhost:8080/agendamentos/api/medico'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseUrl).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Medico>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  update(medico: Medico): Observable<Medico> {
    const url = `${this.baseUrl}/`
    return this.http.put<Medico>(url, medico).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<Medico>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  search(medicoFilter: MedicoFilter): Observable<ListResponse<Medico>> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<ListResponse<Medico>>(url, medicoFilter).pipe(
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
