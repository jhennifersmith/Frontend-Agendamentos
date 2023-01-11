import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoCrudComponent } from '../../views/agendamento-crud/agendamento-crud.component';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { AgendamentoSearchComponent } from './agendamento-search/agendamento-search.component';


const agendamentoRoutes: Routes = [
    {
        path: "agendamento",
        component: AgendamentoCrudComponent,
        children: [
            {
                path: "",
                component: AgendamentoSearchComponent
            },
            {
                path: "create",
                component: AgendamentoFormComponent
            },
            {
                path: "update/:id",
                component: AgendamentoFormComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(agendamentoRoutes)],
    exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
