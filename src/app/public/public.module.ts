import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink} from '@angular/router';
import {PublicRouting} from './public.routing';
import {LoginPageComponent } from './components/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

@NgModule({
  declarations: [
    StartPageComponent,
    WorkerCardComponent,
    HeaderComponent,
    LoginPageComponent,
    AuthDialogComponent,
    RegistrationPageComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    PublicRouting,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule
  ]
})
export class PublicModule { }
