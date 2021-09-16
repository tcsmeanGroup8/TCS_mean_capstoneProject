import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  constructor(public userSer:UserService, public home: HomeComponent, private arouter:ActivatedRoute) { }

  fundsRef = new FormGroup({
    amount:new FormControl()
  });

  msg = "";
  totalFunds = this.fetchFunds();

  ngOnInit(): void {
  }

  fetchFunds() {
    let userID =  { email: this.arouter.snapshot.url[1].path, password: "temp" }
    this.userSer.fetchFunds(userID).subscribe(result=> {
      if (result) {
        this.totalFunds = result;
      }
    }, error=>console.log(error));
  }

  addFunds() {
    let funding = this.fundsRef.value;
    funding.userID = this.arouter.snapshot.url[1].path;
    this.userSer.addFunds(funding).subscribe(result=> {
      console.log(result);
      if (result) {
        this.msg = "Successfully added $" + funding.amount + " to your account.";
        this.fetchFunds();
      }
      else {
        this.msg = "Error with your bank account. Please create a ticket.";
      }
    }, error=>console.log(error));
    this.fundsRef.reset();
  }

}
