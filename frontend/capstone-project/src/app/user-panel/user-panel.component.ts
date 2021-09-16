import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userName?: string;

// static value for testing purpose
  // TODO: pre-defined products, you want to replace with the product from MongoDB, using GET
  cheetos: Product = { name: "Cheetos", price: 10, img: "https://m.media-amazon.com/images/I/91dl7O-wxhL._SL1500_.jpg" };
  vegetables: Product = { name: "Vegetables", price: 20, img: "https://johnnylapasta.files.wordpress.com/2016/03/grocery-store-1.jpg?w=660&h=440&crop=1" };
  sodacan: Product = { name: "Soda Can", price: 35, img: "https://m.media-amazon.com/images/I/417aMZwnMmL._AC_SX466_.jpg"};
  fruits: Product = { name: "Mixed Fruits", price: 29, img:"https://media.istockphoto.com/photos/fresh-mixed-fruits-picture-id467652436?b=1&k=20&m=467652436&s=170667a&w=0&h=SgDVjLV5rfJ-kJ80GYcQJ4CL1R0n4LoxTYXixnSZuWs="};
  products = new Array<Product>(this.cheetos, this.vegetables, this.sodacan, this.fruits);
  // empty cart
  cart = new Array<Product>();

  constructor(public activateRoute: ActivatedRoute, public router: Router, public home: HomeComponent) { }
  ngOnInit(): void {
    //this.activateRoute.params.subscribe(data => this.userName = data.user);
    this.userName = this.home.userID;

    this.displayProducts();
  }

  displayProducts() {
    for (const item of this.products) {
      let name = item.name;
      let price = "$ " + item.price.toLocaleString("USD", { maximumFractionDigits: 2 });

      let divTag = document.createElement("div");
      divTag.setAttribute("class", "col-sm-6 col-md-3");

      //card
      let cardTag = document.createElement("div");
      cardTag.setAttribute("class", "card");

      //card top
      let imgTag = document.createElement("img");
      imgTag.setAttribute("class", "card-img-top");
      if (item.img) {
        imgTag.setAttribute("src", item.img);
      } else {
        imgTag.setAttribute("src", "data:image/jpeg;base64,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");
      }
      imgTag.setAttribute("style", "height:225px; width:100%; display:block");

      //card body part
      let cardBodyTag = document.createElement("div");
      cardBodyTag.setAttribute("class", "card-body");

      let nameTag = document.createElement("h5");
      nameTag.setAttribute("class", "card-title");
      nameTag.appendChild(document.createTextNode(name));

      let priceTag = document.createElement("p");
      priceTag.setAttribute("class", "card-text");
      priceTag.appendChild(document.createTextNode(price));

      let addButton = document.createElement("input");
      addButton.setAttribute("type", "button");
      addButton.setAttribute("value", "Add to Cart");
      addButton.setAttribute("class", "btn btn-primary");
      addButton.addEventListener("click", () => this.addToCart(item));

      cardBodyTag.appendChild(nameTag);
      cardBodyTag.appendChild(priceTag);

      //adding content to card
      cardTag.appendChild(imgTag);
      cardTag.appendChild(cardBodyTag);
      cardTag.appendChild(addButton);

      divTag.appendChild(cardTag);

      // refer the tag using id selector and append the p tag to div tag
      document.getElementById("items")!.appendChild(divTag);
    }
  }
  //TODO: you will add to order collection in MongoDB once you place the order
  addToCart(item: Product) {
    this.cart.push(item);
    localStorage.setItem("cartObj", JSON.stringify(this.cart));
    document.getElementById("size")!.innerText = this.cart.length + "";
  }

  displayCart() {
    let cartObj = localStorage.getItem("cartObj") || "{}";
    let cartJson = JSON.parse(cartObj);
    let tableContent: string = "";
    let startTable: string = "<table><tr><th>Item Name</th><th>Price</th></tr>"
    let total: number = 0;
    for (let i = 0; i < cartJson.length; i++) {
      let obj = cartJson[i];
      let priceStr = "$ " + Number(obj.price).toLocaleString("USD", { maximumFractionDigits: 2 });
      tableContent += "<tr><td>" + obj.name
        + "</td><td>" + priceStr + "</td></tr>";
      total = total + obj.price;
    }
    //display table
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    let cartTable = document.getElementById("cartTable");
    if (cartTable) (cartTable as HTMLFormElement).innerHTML = tableContent;

    //display total
    let totalStr = "$ " + Number(total).toLocaleString("USD", { maximumFractionDigits: 2 });
    let totalRow = "<b>" + totalStr + "</b>";
    document.getElementById("total_price")!.innerHTML = totalRow;
  }

}
