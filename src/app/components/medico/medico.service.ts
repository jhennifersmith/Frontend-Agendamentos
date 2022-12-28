import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { MedicoFilter } from './medico-filter.model';
import { Medico } from './medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseUrl = 'http://localhost:8080/agendamentos/api/medico'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  read(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Medico>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  update(medico: Medico): Observable<Medico> {
    const url = `${this.baseUrl}/`
    return this.http.put<Medico>(url, medico).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<Medico>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  search(medicoFilter: MedicoFilter): Observable<Medico[]> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<MedicoFilter[]>(url, medicoFilter).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
