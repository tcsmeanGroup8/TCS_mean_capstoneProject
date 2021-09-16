import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeChangePwComponent } from './employee-change-pw/employee-change-pw.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"userSignIn",component:UserSignInComponent},
  {path:"userSignUp",component:UserSignUpComponent},
  {path:"userPanel/:user",component:UserPanelComponent},
  {path:"employeeSignIn", component:EmployeeSignInComponent},
  {path:"empChangePassword/:employee", component:EmployeeChangePwComponent},
  {path:"employeePanel/:employee", component:EmployeePanelComponent},
  {path:"adminPanel",loadChildren:()=>import('../admin/admin.module').then(m=>m.AdminModule)},
  {path:"",redirectTo:"userSignIn",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
