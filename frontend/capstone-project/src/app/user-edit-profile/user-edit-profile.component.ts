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
        let url = "userPanel/" + account.email + "/editProfile";
        this.router.navigate([url]);
        this.msg = "Profile successfully updated.";
      }
      else {
        this.msg = "Error with your profile. Please submit a ticket!";
      }
    }, error=>console.log(error));
    this.home.userID = account.email;
    this.accountRef.reset();
  }
}
