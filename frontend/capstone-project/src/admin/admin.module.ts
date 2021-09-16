import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/AdminHome/admin.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AdminRouterModule } from './admin-router.module';


@NgModule({
  declarations: [  
    AdminComponent, EditProductsComponent, EditUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
