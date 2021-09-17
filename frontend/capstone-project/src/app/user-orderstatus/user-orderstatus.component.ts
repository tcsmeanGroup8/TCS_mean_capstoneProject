import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-orderstatus',
  templateUrl: './user-orderstatus.component.html',
  styleUrls: ['./user-orderstatus.component.css']
})
export class UserOrderstatusComponent implements OnInit {

  constructor(public home: HomeComponent, public userSer: UserService) { }

  ngOnInit(): void {
    this.getOrderStatus();
  }

  allOrders = new Array();
  allowDisplay = false;

  getOrderStatus() {
    let user =  { email: this.home.userID, password: "temp"};
    this.userSer.getOrder(user).subscribe(result=> {
      this.allowDisplay = false;
      if (result && result.length != 0) {
        try {
          this.allOrders = JSON.parse(result);
          console.log(this.allOrders);
          let tempOrder = [];
          for (let i = 0; i < this.allOrders.length; ++i) {
            for (let j = 0; j < this.allOrders[i].cart.length; ++j) {
              tempOrder.push([this.allOrders[i].cart[j].name, this.allOrders[i].cart[j].price]);
            }
            this.allOrders[i].cart = tempOrder;
            console.log(tempOrder);
            tempOrder = [];
            this.allowDisplay = true;
          }
          
        }
        catch {}
      }
      else {
        this.allowDisplay = false;
      }
    }, error=>console.log(error));
    
  }

}
