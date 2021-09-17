import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeChangePwComponent } from './employee-change-pw/employee-change-pw.component';
import { FundsComponent } from './funds/funds.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserOrderstatusComponent } from './user-orderstatus/user-orderstatus.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserSignUpComponent,
    UserSignInComponent,
    AdminPanelComponent,
    HomeComponent,
    EmployeeSignInComponent,
    EmployeePanelComponent,
    EmployeeChangePwComponent,
    FundsComponent,
    UserEditProfileComponent,
    UserCheckoutComponent,
    UserOrderstatusComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
