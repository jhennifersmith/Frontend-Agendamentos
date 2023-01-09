
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCrudComponent } from '../../views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const clienteRoutes: Routes = [
    {
        path: "cliente",
        component: ClienteCrudComponent,
    },
    {
        path: "cliente/create",
        component: ClienteFormComponent
    },
    {
        path: "cliente/update/:id",
        component: ClienteFormComponent
    },
    {
        path: "cliente/delete",
        component: ClienteDeleteComponent
    },
    {
        path: "cliente/search",
        component: ClienteSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
