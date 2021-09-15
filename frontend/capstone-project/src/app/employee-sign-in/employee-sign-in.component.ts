import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {
  empLoginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(public empSer:EmployeeService,
    public router:Router) { }
  
  msg?:string;

  ngOnInit(): void {
  }

  checkEmp() {
    let login = this.empLoginRef.value;
    this.empSer.empSignInAccount(login).subscribe(result=> {
      if (result=="1") {
        this.router.navigate(["employeePanel", login.email]);
      }
      else if (result=="3") {//SWAP THIS OR ELSE
        this.router.navigate(["empChangePassword", login.email]);
      }
      else {
        this.msg = "Wrong username or password!";
      }
    }, error=>console.log(error));
    this.empLoginRef.reset();
  }
}
