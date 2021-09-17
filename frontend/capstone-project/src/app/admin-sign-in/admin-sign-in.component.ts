import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {
  admLoginRef = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  });

  msg?:string;

  constructor(public empSer:EmployeeService, public homePage:HomeComponent, public router:Router) { }

  ngOnInit(): void {
  }

  checkAdm() {
    let login = this.admLoginRef.value;
    this.empSer.admSignInAccount(login).subscribe(result=> {
      if (result=="Success") {
        this.homePage.changeLogged('adm');
        this.router.navigate(["adminPanel"]);
      }
      else {
        this.msg = "Wrong username or password!";
      }
    }, error=>console.log(error));
    this.admLoginRef.reset();
  }

}
