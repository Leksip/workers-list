import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink} from '@angular/router';
import {PublicRouting} from './public.routing';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    StartPageComponent,
    WorkerCardComponent,
    HeaderComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    PublicRouting,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
