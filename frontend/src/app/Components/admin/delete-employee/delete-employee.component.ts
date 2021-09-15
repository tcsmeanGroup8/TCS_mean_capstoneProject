import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteData:any={};
  constructor(
    public adminService:AdminService,
    public toastr:ToastrService,
    public router:Router
  ) { }
  ngOnInit(): void {
  }

  deleteEmployees(email:any){
    if(email===""){
      this.toastr.error("Please fill up the required fields", 'Error', {
        timeOut: 2000,
      });
    }else{
      this.adminService.deleteEmployee(email).subscribe(result=>{
        if(result == "true"){
          this.toastr.success("Record deleted successfully", 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['admin-dashboard']);
        }else{
          this.toastr.error("Record does not exist", 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }
}