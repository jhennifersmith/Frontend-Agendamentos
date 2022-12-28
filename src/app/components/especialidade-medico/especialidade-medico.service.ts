import { EspecialidadeMedico } from './especialidade-medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { EspecialidadeMedicoFilter } from './especialidade-medico-filter.model';
import { EspecialidadeMedicoGridDTO } from './especialidade-medico-dto.model';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeMedicoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/especialidade-medico'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(especialidadeMedico: EspecialidadeMedico): Observable<EspecialidadeMedico> {
    return this.http.post<EspecialidadeMedico>(this.baseUrl, especialidadeMedico).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }
  read(): Observable<EspecialidadeMedico[]> {
    return this.http.get<EspecialidadeMedico[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<EspecialidadeMedico>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<EspecialidadeMedico> {
    const url = `${this.baseUrl}/${id};`
    return this.http.delete<EspecialidadeMedico>(url).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  search(especialidadeMedicoFilter: EspecialidadeMedicoFilter): Observable<EspecialidadeMedicoGridDTO[]> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<EspecialidadeMedicoGridDTO[]>(url, especialidadeMedicoFilter).pipe(
      map((obj) => obj),
      catchError( e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
