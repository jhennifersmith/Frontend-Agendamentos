import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Especialidade } from './especialidade.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

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

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
