import { EspecialidadeMedicoDTO } from '../models/especialidade-medico-dto.model';
import { EspecialidadeMedico } from '../models/especialidade-medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { EspecialidadeMedicoFilter } from '../models/especialidade-medico-filter.model';
import { EspecialidadeMedicoGridDTO } from '../models/especialidade-medico-grid-dto.model';

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

  search(especialidadeMedicoFilter: EspecialidadeMedicoFilter): Observable<EspecialidadeMedicoGridDTO[]> {
    const url = `${this.baseUrl}/search`
    return this.http.post<EspecialidadeMedicoGridDTO[]>(url, especialidadeMedicoFilter).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
