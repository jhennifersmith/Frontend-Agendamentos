
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
        path: "medico/delete",
        component: MedicoDeleteComponent
    },
    {
        path: "medico/search",
        component: MedicoSearchComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(medicoRoutes)],
    exports: [RouterModule]
})
export class MedicoRoutingModule { }
