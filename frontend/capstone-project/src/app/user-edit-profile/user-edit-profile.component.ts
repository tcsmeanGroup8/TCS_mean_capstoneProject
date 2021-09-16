import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  constructor(public userSer: UserService, public home: HomeComponent, public router: Router) { }

  msg = "";

  accountRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    dob:new FormControl(),
    phone:new FormControl(),
    address:new FormControl()
  })

  ngOnInit(): void {
  }

  editProfile() {
    let account = this.accountRef.value;
    account.userID = this.home.userID;
    this.userSer.editProfile(account).subscribe(result=> {
      if (result=="1") {
        this.msg = "Profile successfully updated.";
      }
      else {
        this.msg = "Wrong username or password!";
      }
    }, error=>console.log(error));
    this.accountRef.reset();
  }
}
