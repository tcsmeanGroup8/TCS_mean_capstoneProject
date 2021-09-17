import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AddProductComponent} from './add-product/add-product.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeChangePwComponent } from './employee-change-pw/employee-change-pw.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { FundsComponent } from './funds/funds.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserOrderstatusComponent } from './user-orderstatus/user-orderstatus.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"userSignIn",component:UserSignInComponent},
  {path:"userSignUp",component:UserSignUpComponent},
  {path:"userPanel/:user",component:UserPanelComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"ticket",component:TicketComponent},
  {path:"userPanel/:user/funds",component:FundsComponent},
  {path:"userPanel/:user/editProfile",component:UserEditProfileComponent},
  {path:"employeeSignIn", component:EmployeeSignInComponent},
  {path:"empChangePassword/:employee", component:EmployeeChangePwComponent},
  {path:"employeePanel/:employee", component:EmployeePanelComponent},
  {path:"adminSignIn", component:AdminSignInComponent},
  {path:"adminPanel", component:AdminPanelComponent},
  {path:"userPanel/:user/checkout",component:UserCheckoutComponent},
  {path:"userPanel/:user/orderStatus",component:UserOrderstatusComponent},
  {path:"",redirectTo:"userSignIn",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
