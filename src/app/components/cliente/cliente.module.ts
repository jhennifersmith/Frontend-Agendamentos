import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteCrudComponent } from './../../views/cliente-crud/cliente-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ClienteService } from './cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatRadioModule,
        ClienteRoutingModule
    ],
    exports: [],
    declarations: [
        ClienteCrudComponent,
        ClienteCreateComponent,
        ClienteSearchComponent,
        ClienteUpdateComponent,
        ClienteDeleteComponent,
        ClienteFormComponent,
    ],
    providers: [ClienteService],
})

export class ClienteModule { }