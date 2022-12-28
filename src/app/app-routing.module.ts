import { EspecialidadeCrudComponent } from './views/especialidade-crud/especialidade-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EspecialidadeMedicoCrudComponent } from './views/especialidade-medico-crud/especialidade-medico-crud.component';
import { AgendamentoCrudComponent } from './views/agendamento-crud/agendamento-crud.component';
import { EspecialidadeCreateComponent } from './components/especialidade/especialidade-create/especialidade-create.component';
import { EspecialidadeUpdateComponent } from './components/especialidade/especialidade-update/especialidade-update.component';
import { EspecialidadeDeleteComponent } from './components/especialidade/especialidade-delete/especialidade-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { EspecialidadeMedicoCreateComponent } from './components/especialidade-medico/especialidade-medico-create/especialidade-medico-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteSearchComponent } from './components/cliente/cliente-search/cliente-search.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoSearchComponent } from './components/medico/medico-search/medico-search.component';
import { EspecialidadeMedicoDeleteComponent } from './components/especialidade-medico/especialidade-medico-delete/especialidade-medico-delete.component';
import { EspecialidadeMedicoSearchComponent } from './components/especialidade-medico/especialidade-medico-search/especialidade-medico-search.component';
import { AgendamentoCreateComponent } from './components/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoUpdateComponent } from './components/agendamento/agendamento-update/agendamento-update.component';
import { AgendamentoSearchComponent } from './components/agendamento/agendamento-search/agendamento-search.component';
import { AgendamentoReadComponent } from './components/agendamento/agendamento-read/agendamento-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "especialidade",
    component: EspecialidadeCrudComponent
  },
  {
    path: "especialidade/create",
    component: EspecialidadeCreateComponent
  },
  {
    path: "medico",
    component: MedicoCrudComponent
  },
  {
    path: "medico/create",
    component: MedicoCreateComponent
  },
  {
    path: "medico/update/:id",
    component: MedicoUpdateComponent
  },
  {
    path: "medico/search/",
    component: MedicoSearchComponent
  },
  {
    path: "medico/delete/:id",
    component: MedicoDeleteComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "cliente/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "cliente/search",
    component: ClienteSearchComponent
  },
  {
    path: "especialidade-medico",
    component: EspecialidadeMedicoCrudComponent
  },
  {
    path: "especialidade-medico/create",
    component: EspecialidadeMedicoCreateComponent
  },
  {
    path: "especialidade-medico/delete/:id",
    component: EspecialidadeMedicoDeleteComponent
  },
  {
    path: "especialidade-medico/search",
    component: EspecialidadeMedicoSearchComponent
  },
  {
    path: "agendamento",
    component: AgendamentoCrudComponent
  },
  {
    path: "agendamento/create",
    component: AgendamentoCreateComponent
  },
  {
    path: "agendamento/update/:id",
    component: AgendamentoUpdateComponent
  },
  {
    path: "agendamento/read",
    component: AgendamentoReadComponent
  },
  {
    path: "agendamento/search",
    component: AgendamentoSearchComponent
  },
  {
    path: "especialidade/update/:id",
    component: EspecialidadeUpdateComponent
  },
  {
    path: "especialidade/delete/:id",
    component: EspecialidadeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
