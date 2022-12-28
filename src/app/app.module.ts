import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { EspecialidadeCrudComponent } from './views/especialidade-crud/especialidade-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';
import { AgendamentoCrudComponent } from './views/agendamento-crud/agendamento-crud.component';
import { EspecialidadeMedicoCrudComponent } from './views/especialidade-medico-crud/especialidade-medico-crud.component';
import { EspecialidadeCreateComponent } from './components/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeReadComponent } from './components/especialidade/especialidade-read/especialidade-read.component';
import { EspecialidadeRead2Component } from './components/especialidade/especialidade-read2/especialidade-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EspecialidadeUpdateComponent } from './components/especialidade/especialidade-update/especialidade-update.component';
import { EspecialidadeDeleteComponent } from './components/especialidade/especialidade-delete/especialidade-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico/especialidade-medico-create/especialidade-medico-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { MedicoReadComponent } from './components/medico/medico-read/medico-read.component';
import { EspecialidadeMedicoReadComponent } from './components/especialidade-medico/especialidade-medico-read/especialidade-medico-read.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteSearchComponent } from './components/cliente/cliente-search/cliente-search.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoSearchComponent } from './components/medico/medico-search/medico-search.component';
import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoSearchComponent } from './components/especialidade-medico/especialidade-medico-search/especialidade-medico-search.component';
import { AgendamentoCreateComponent } from './components/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoSearchComponent } from './components/agendamento/agendamento-search/agendamento-search.component';
import { AgendamentoUpdateComponent } from './components/agendamento/agendamento-update/agendamento-update.component';
import { AgendamentoReadComponent } from './components/agendamento/agendamento-read/agendamento-read.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    EspecialidadeCrudComponent,
    ClienteCrudComponent,
    MedicoCrudComponent,
    AgendamentoCrudComponent,
    EspecialidadeMedicoCrudComponent,
    EspecialidadeCreateComponent,
    EspecialidadeReadComponent,
    EspecialidadeRead2Component,
    EspecialidadeUpdateComponent,
    EspecialidadeDeleteComponent,
    ClienteCreateComponent,
    MedicoCreateComponent,
    EspecialidadeMedicoCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    MedicoReadComponent,
    EspecialidadeMedicoReadComponent,
    ClienteDeleteComponent,
    ClienteSearchComponent,
    MedicoUpdateComponent,
    MedicoDeleteComponent,
    MedicoSearchComponent,
    EspecialidadeMedicoDeleteComponent,
    EspecialidadeMedicoSearchComponent,
    AgendamentoCreateComponent,
    AgendamentoSearchComponent,
    AgendamentoUpdateComponent,
    AgendamentoReadComponent
  ],
  imports: [
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
