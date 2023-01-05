
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadeMedicoCrudComponent } from '../../views/especialidade-medico-crud/especialidade-medico-crud.component';
import { EspecialidadeMedicoCreateComponent } from './especialidade-medico-create/especialidade-medico-create.component';
import { EspecialidadeMedicoSearchComponent } from './especialidade-medico-search/especialidade-medico-search.component';
import { EspecialidadeMedicoDeleteComponent } from './especialidade-medico-delete/especialidade-medico-delete.component';

const especialidademedicoRoutes: Routes = [
    {
        path: "especialidade-medico",
        component: EspecialidadeMedicoCrudComponent,
    },
    {
        path: "especialidade-medico/create",
        component: EspecialidadeMedicoCreateComponent
    },
    {
        path: "especialidade-medico/delete",
        component: EspecialidadeMedicoDeleteComponent
    },
    {
        path: "especialidade-medico/search",
        component: EspecialidadeMedicoSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(especialidademedicoRoutes)],
    exports: [RouterModule]
})
export class EspecialidadeMedicoRoutingModule { }
