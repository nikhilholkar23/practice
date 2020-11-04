import { Component, Inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     width: '350px',
  //     data: {name: 'test', list: this.List}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result);
      
  //   });
  // }

}