import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HomeComponent } from '../home/home.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  constructor(public router: Router, public home: HomeComponent, public userSer: UserService, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchCart();
    this.fetchFunds();
  }

  userCart = new Array();
  allowDisplay = false;
  totalPrice = 0;
  totalFunds = 0;
  msg = "";

  fetchCart() {
    let item = { name: "", price: 0, userID: this.home.userID };
    this.userSer.fetchCart(item).subscribe(result=> {
      if (result != undefined) {
        try {
          this.userCart = JSON.parse(result).cart;
        }
        catch{ console.log("Error retrieving data. Please reload or submit a ticket.") }
        document.getElementById("size")!.innerText = String(this.userCart.length);
        this.allowDisplay = true;
        this.userCart.forEach(x => {
          this.totalPrice += x.price;
        })
      }
    }, error=>console.log(error));
  }

  fetchFunds() {
    let userID =  { email: this.arouter.snapshot.url[1].path, password: "temp" }
    this.userSer.fetchFunds(userID).subscribe(result=> {
      if (result) {
        this.totalFunds = result;
      }
    }, error=>console.log(error));
  }

  submitOrder() {
    if (this.totalFunds >= this.totalPrice) {
      let user =  { email: this.arouter.snapshot.url[1].path, password: "temp", cart: this.userCart, userID: this.arouter.snapshot.url[1].path}
      this.userSer.submitOrder(user).subscribe(result=> {}, error=>console.log(error));
      this.userSer.subtractFunds(user).subscribe(result=> {}, error=>console.log(error));
      user.cart = [];
      this.userSer.editProfile(user).subscribe(result=> {}, error=>console.log(error));
      let url = "userPanel/" + this.arouter.snapshot.url[1].path + "/orderStatus";
      console.log(url);
      this.router.navigate([url]);
      this.msg = "Successfully placed order!"
    }
    else {
      this.msg = "Error: You do not have sufficient funds. Please add more in your funds tab.";
    }
  }

}
