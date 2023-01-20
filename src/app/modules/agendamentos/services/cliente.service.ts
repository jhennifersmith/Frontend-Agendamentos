import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ClienteFilter } from '../models/cliente-filter.model';
import { Cliente } from '../models/cliente.model';
import { ListResponse } from '../models/list-response.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8080/agendamentos/api/cliente'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // showMessage(msg: string, isError: boolean = false): void {
  //   this.snackBar.open(msg, '', {
  //     duration: 3000,
  //     horizontalPosition: "right",
  //     verticalPosition: "top",
  //     panelClass: isError? ['msg-error'] : ['msg-success']
  //   })
  // }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  readActive(): Observable<Cliente[]> {
    const url = `${this.baseUrl}/get-all-ativos/`
    return this.http.get<Cliente[]>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  search(clienteFilter: ClienteFilter): Observable<ListResponse<Cliente>> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<ListResponse<Cliente>>(url, clienteFilter).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/`
    return this.http.put<Cliente>(url, cliente).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<Cliente>(url).pipe(
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
