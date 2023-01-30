import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {WorkerCardComponent} from './components/worker-card/worker-card.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    children: [
      {path: 'worker', component: WorkerCardComponent},
      {path: 'login', component: LoginPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRouting {
}
