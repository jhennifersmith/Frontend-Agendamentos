import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCrudComponent } from '../../views/medico-crud/medico-crud.component';
import { MedicoSearchComponent } from './medico-search/medico-search.component';
import { MedicoDeleteComponent } from './medico-delete/medico-delete.component';
import { MedicoFormComponent } from './medico-form/medico-form.component';

const medicoRoutes: Routes = [
    {
        path: "",
        component: MedicoCrudComponent,
        children: [
            {
                path: "create",
                component: MedicoFormComponent
            },
            {
                path: "update/:id",
                component: MedicoFormComponent
            },
            {
                path: "delete/:id",
                component: MedicoDeleteComponent
            },
            {
                path: "",
                component: MedicoSearchComponent
            }
        ]
    },
 

];

@NgModule({
    imports: [RouterModule.forChild(medicoRoutes)],
    exports: [RouterModule]
})
export class MedicoRoutingModule { }
