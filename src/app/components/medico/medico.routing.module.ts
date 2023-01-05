
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCrudComponent } from '../../views/medico-crud/medico-crud.component';
import { MedicoCreateComponent } from './medico-create/medico-create.component';
import { MedicoUpdateComponent } from './medico-update/medico-update.component';
import { MedicoSearchComponent } from './medico-search/medico-search.component';
import { MedicoDeleteComponent } from './medico-delete/medico-delete.component';

const medicoRoutes: Routes = [
    {
        path: "medico",
        component: MedicoCrudComponent,
        children: [
            {
                path: "create",
                component: MedicoCreateComponent
            },
            {
                path: "update/:id",
                component: MedicoUpdateComponent
            },
            {
                path: "delete",
                component: MedicoDeleteComponent
            },
            {
                path: "search",
                component: MedicoSearchComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(medicoRoutes)],
    exports: [RouterModule]
})
export class MedicoRoutingModule { }
