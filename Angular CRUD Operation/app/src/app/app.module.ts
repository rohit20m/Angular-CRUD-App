import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { SignalComponent } from './signal/signal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkLightComponent } from './dark-light/dark-light.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    SignUpComponent,
    ManagerDashboardComponent,
    SignalComponent,
    NavbarComponent,
    DarkLightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-center',
      timeOut:4000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
