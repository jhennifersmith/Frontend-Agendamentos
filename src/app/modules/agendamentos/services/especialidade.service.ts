import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Especialidade } from '../models/especialidade.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(especialidade: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>(this.baseUrl, especialidade).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Especialidade>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  update(especialidade: Especialidade): Observable<Especialidade> {
    const url = `${this.baseUrl}/`
    return this.http.put<Especialidade>(url, especialidade).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Especialidade> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<Especialidade>(url).pipe(
      map((obj) => obj),
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
