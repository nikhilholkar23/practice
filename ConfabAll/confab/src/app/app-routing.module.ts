import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { TestComponent } from './test/test.component';
import { ListuserComponent } from './components/listuser/listuser.component';


const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
  },
  {
    path:'test',component:TestComponent,canActivate:[AuthGaurdService]
  },
  {
    path:'login',component:LoginComponent,canActivate:[AuthGaurdService]

  },
  {
    path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]

  },
  {
    path:'emp',component:ListuserComponent,canActivate:[AuthGaurdService]
  },
  {
    path:'' ,component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
