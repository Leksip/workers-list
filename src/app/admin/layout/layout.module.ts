import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';


@NgModule({
  declarations: [


    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,

  ]
})
export class LayoutModule {
}
