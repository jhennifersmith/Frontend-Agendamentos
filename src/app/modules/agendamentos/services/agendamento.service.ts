import { AgendamentoGridDTO } from '../models/agendamento-grid-dto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AgendamentoFilter } from '../models/agendamento-filter.model';
import { Agendamento } from '../models/agendamento.model';
import { AgendamentoDTO } from '../models/agendamentoDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  baseUrl = 'http://localhost:8080/agendamentos/api/agendamento'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

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

  search(agendamentoFilter: AgendamentoFilter): Observable<AgendamentoGridDTO[]> {
    const url = `${this.baseUrl}/search/`
    return this.http.post<AgendamentoGridDTO[]>(url, agendamentoFilter).pipe(
      catchError( e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

}
