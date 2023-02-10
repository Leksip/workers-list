import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { WorkerFormComponent } from './components/workers-form/worker-form.component';
import {AdminRouting} from './admin.routing';
import {LayoutModule} from './layout/layout.module';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    WorkersListComponent,
    WorkerFormComponent,
    WorkerCardComponent,


  ],
  imports: [
    CommonModule,
    AdminRouting,
    LayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class AdminModule { }
