import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User, AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent  {
  username = ''
  password = ''
  private confirmPassword: string;
  private nickName: string;
  invalidLogin = false
 // user: User = new User("", "","");
  public user:Array<User>;
  @Input() error: string | null;
  closeResult: string;
  public loginView: boolean;
  private fieldsIncorrect: boolean;
  private submitProcessing: boolean;
  constructor(private router: Router,private loginservice: AuthenticationService,public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    setLoginView(option: boolean) {
      this.fieldsIncorrect = false;
      this.loginView = option;
    }
    checkLogin() {
    

      (this.loginservice.authenticate(this.username, this.password).subscribe(
        
        data => {
          this.router.navigate(['test'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          this.error = error.message;
  
        }
      )
      );
  
    }
    

    signUp(): void {
      console.debug(this.user);
    
      this.loginservice.createEmployee( this.user).subscribe(data => {
        alert("User created successfully.");
        this.router.navigate([''])
      });
    }
    
}