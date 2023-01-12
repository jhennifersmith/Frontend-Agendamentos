import { MedicoRoutingModule } from './medico.routing.module';
import { MedicoDeleteComponent } from './medico-delete/medico-delete.component';
import { MedicoSearchComponent } from './medico-search/medico-search.component';
import { MedicoCrudComponent } from './../../views/medico-crud/medico-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
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
import { MedicoService } from 'src/app/modules/agendamentos/services/medico.service';
import { MedicoFormComponent } from './medico-form/medico-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatRadioModule,
        MedicoRoutingModule,
        MatSelectModule
    ],
    exports: [],
    declarations: [
        MedicoCrudComponent,
        MedicoSearchComponent,
        MedicoDeleteComponent,
        MedicoFormComponent,
    ],
    providers: [MedicoService],
})

export class MedicoModule { }