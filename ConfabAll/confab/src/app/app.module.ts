import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatSelectModule} from '@angular/material/select';
import{MatFormFieldModule} from '@angular/material/form-field';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDialogRef} from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TestComponent } from './test/test.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { MatTableModule } from '@angular/material/table'  
import { HttpClientService } from './service/httpclient.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    PresentationComponent,
    TestComponent,
    ListuserComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    

  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
