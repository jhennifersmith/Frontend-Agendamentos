import { AgendamentoModule } from './components/agendamento/agendamento.module';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "agendamento",
    loadChildren: () => import('src/app/modules/agendamentos/components/agendamento/agendamento.module').then(m => m.AgendamentoModule)
  },
  {
    path: "cliente",
    loadChildren: () => import('src/app/modules/agendamentos/components/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: "especialidade",
    loadChildren: () => import('src/app/modules/agendamentos/components/especialidade/especialidade.module').then(m => m.EspecialidadeModule)
  },
  {
    path: "especialidade-medico",
    loadChildren: () => import('src/app/modules/agendamentos/components/especialidade-medico/especialidade-medico.module').then(m => m.EspecialidadeMedicoModule)
  },
  {
    path: "medico",
    loadChildren: () => import('src/app/modules/agendamentos/components/medico/medico.module').then(m => m.MedicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
