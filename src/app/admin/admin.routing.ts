import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/components/layout/layout.component';
import {WorkersListComponent} from './components/workers-list/workers-list.component';
import {WorkerFormComponent} from './components/workers-form/worker-form.component';



const routes: Routes = [
  {
    path: '',component: LayoutComponent,children:[
      {path:'',component: WorkersListComponent},
      {path:':id', component: WorkerFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
