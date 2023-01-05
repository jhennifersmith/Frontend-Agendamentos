
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoCrudComponent } from '../../views/agendamento-crud/agendamento-crud.component';
import { AgendamentoCreateComponent } from './agendamento-create/agendamento-create.component';
import { AgendamentoUpdateComponent } from './agendamento-update/agendamento-update.component';
import { AgendamentoSearchComponent } from './agendamento-search/agendamento-search.component';
import { AgendamentoReadComponent } from './agendamento-read/agendamento-read.component';

const agendamentoRoutes: Routes = [
    {
        path: "agendamento",
        component: AgendamentoCrudComponent,
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(agendamentoRoutes)],
    exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
