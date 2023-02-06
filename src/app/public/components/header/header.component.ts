import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LoginPageComponent} from '../login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(
  public dialog: MatDialog
) {
}
  openDialog() {
    let dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(LoginPageComponent, dialogConfig);
  }
}
