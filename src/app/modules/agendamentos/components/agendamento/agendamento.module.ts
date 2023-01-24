import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendamentoCrudComponent } from './../../views/agendamento-crud/agendamento-crud.component';
import { AgendamentoRoutingModule } from './agendamento.routing.module';
import { AgendamentoSearchComponent } from './agendamento-search/agendamento-search.component';
import { AgendamentoService } from 'src/app/modules/agendamentos/services/agendamento.service';
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
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { MatSelectModule } from '@angular/material/select';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask'

@NgModule({
    imports: [
        CommonModule,
        AgendamentoRoutingModule,
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
        MatSelectModule,
        RouterModule,
        NgxMaskDirective, NgxMaskPipe
    ],
    exports: [],
    declarations: [
        AgendamentoCrudComponent, 
        AgendamentoSearchComponent,
        AgendamentoFormComponent
    ],
    providers: [AgendamentoService, provideNgxMask()],
    
})

export class AgendamentoModule { }