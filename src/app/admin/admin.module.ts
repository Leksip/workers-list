import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { WorkersFormComponent } from './components/workers-form/workers-form.component';
import {AdminRouting} from './admin.routing';
import {LayoutModule} from './layout/layout.module';



@NgModule({
  declarations: [
    WorkersListComponent,
    WorkersFormComponent,

  ],
  imports: [
    CommonModule,
    AdminRouting,
    LayoutModule
  ]
})
export class AdminModule { }
