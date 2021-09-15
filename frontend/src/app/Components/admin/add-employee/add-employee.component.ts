import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  signUpData:any={}
  constructor(
    public adminService:AdminService,
    public toastr:ToastrService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  signup(employeeRef:any){
    this.adminService.Signup(employeeRef).subscribe(result =>{
      this.signUpData=result;
      if(this.signUpData.success){
        this.toastr.success(this.signUpData.msg, 'Success', {
          timeOut: 2000,
        });
      }else{
        this.toastr.error(this.signUpData.msg, 'Error', {
          timeOut: 2000,
        });
      }
    });
  }
}