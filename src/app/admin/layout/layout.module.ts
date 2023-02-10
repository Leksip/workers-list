import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterLink, RouterOutlet} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [


    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    RouterLink,
    MatButtonModule,

  ]
})
export class LayoutModule {
}
