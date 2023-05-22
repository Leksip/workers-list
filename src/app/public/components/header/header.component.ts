import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {StartPageComponent} from '../start-page/start-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

constructor(
  public dialog: MatDialog,
) {
}
  openDialog() {
    let dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AuthDialogComponent, dialogConfig);
  }

}
