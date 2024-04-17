import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { UserDetailsComponent } from './components/pages/user-details/user-details.component';
import { GuardGuard } from './auth/guard.guard';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"register",component:RegisterPageComponent},
  {path:"user-details",component:UserDetailsComponent,canActivate:[GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
