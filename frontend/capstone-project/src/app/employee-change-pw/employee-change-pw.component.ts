import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-change-pw',
  templateUrl: './employee-change-pw.component.html',
  styleUrls: ['./employee-change-pw.component.css']
})
export class EmployeeChangePwComponent implements OnInit {
  empLoginRef = new FormGroup({
    password:new FormControl(),
    password2:new FormControl()
  });

  constructor(public empSer:EmployeeService, public router:Router, private arouter:ActivatedRoute) { }

  msg?:string;

  ngOnInit(): void {
  }

  changeEmpPw() {
    let login = this.empLoginRef.value;
    login.email = this.arouter.snapshot.url[1].path;  //returns emp email
    if (login.password == login.password2) {
      this.empSer.empChangePassword(login).subscribe(result=> {}, error=>console.log(error));
      this.router.navigate(["employeePanel", login.email]);
    }
    else {
      this.msg = "Error: Both passwords must match!"
    }
    this.empLoginRef.reset();
  }
}
