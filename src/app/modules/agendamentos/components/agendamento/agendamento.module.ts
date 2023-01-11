import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendamentoCrudComponent } from './../../views/agendamento-crud/agendamento-crud.component';
import { AgendamentoRoutingModule } from './agendamento.routing.module';
import { AgendamentoSearchComponent } from './agendamento-search/agendamento-search.component';
import { AgendamentoService } from 'src/app/modules/agendamentos/services/agendamento.service';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/modules/agendamentos/app-routing.module';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        AgendamentoRoutingModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatSelectModule
    ],
    exports: [],
    declarations: [
        AgendamentoCrudComponent, 
        AgendamentoSearchComponent,
        AgendamentoFormComponent
    ],
    providers: [AgendamentoService],
})

export class AgendamentoModule { }