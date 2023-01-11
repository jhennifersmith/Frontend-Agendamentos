import { EspecialidadeMedicoRoutingModule } from './especialidade-medico.routing.module';
import { EspecialidadeMedicoDeleteComponent } from './especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoSearchComponent } from './especialidade-medico-search/especialidade-medico-search.component';
import { EspecialidadeMedicoCreateComponent } from './especialidade-medico-create/especialidade-medico-create.component';
import { EspecialidadeMedicoCrudComponent } from './../../views/especialidade-medico-crud/especialidade-medico-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EspecialidadeMedicoService } from 'src/app/modules/agendamentos/services/especialidade-medico.service';


@NgModule({
    imports: [
        CommonModule,
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
        EspecialidadeMedicoRoutingModule
    ],
    exports: [],
    declarations: [
        EspecialidadeMedicoCrudComponent,
        EspecialidadeMedicoCreateComponent,
        EspecialidadeMedicoSearchComponent,
        EspecialidadeMedicoDeleteComponent,
    ],
    providers: [EspecialidadeMedicoService],
})

export class EspecialidadeMedicoModule { }