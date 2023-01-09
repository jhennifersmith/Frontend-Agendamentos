
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadeCrudComponent } from '../../views/especialidade-crud/especialidade-crud.component';
import { EspecialidadeCreateComponent } from './especialidade-create/especialidade-create.component';
import { EspecialidadeUpdateComponent } from './especialidade-update/especialidade-update.component';
import { EspecialidadeDeleteComponent } from './especialidade-delete/especialidade-delete.component';
import { EspecialidadeFormComponent } from './especialidade-form/especialidade-form.component';

const especialidadeRoutes: Routes = [
    {
        path: "especialidade",
        component: EspecialidadeCrudComponent,
    },
    {
        path: "especialidade/create",
        component: EspecialidadeFormComponent
    },
    {
        path: "especialidade/update/:id",
        component: EspecialidadeFormComponent
    },
    {
        path: "especialidade/delete",
        component: EspecialidadeDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(especialidadeRoutes)],
    exports: [RouterModule]
})
export class EspecialidadeRoutingModule { }
