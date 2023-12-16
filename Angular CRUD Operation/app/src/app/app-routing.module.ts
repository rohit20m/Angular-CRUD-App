import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AuthGuard } from './shared/Auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkLightComponent } from './dark-light/dark-light.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'employeeDashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'managerDashboard', component: ManagerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'navbar', component: NavbarComponent },
  { path:'darkLight',component:DarkLightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
