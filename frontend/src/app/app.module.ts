import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/admin/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Components/admin/delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './Components/admin/generate-reports/generate-reports.component';
import { SigninComponent } from './Components/user/signin/signin.component';
import { SignupComponent } from './Components/user/signup/signup.component';
import { UserPanelComponent } from './Components/user/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
    SigninComponent,
    SignupComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
