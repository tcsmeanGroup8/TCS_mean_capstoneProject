import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Ticket } from '../model/ticket';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_port = "http://localhost:9090/api/user";
  funds_port = "http://localhost:9090/api/funds";
  product_port = "http://localhost:9090/api/product";
  status_port = "http://localhost:9090/api/status";

  constructor(public http: HttpClient) { }

  signInAccount(user: User): Observable<any> {
    return this.http.post(this.user_port + "/signIn", user, { responseType: 'text' });
  }

  signUpAccount(user: User): Observable<any> {
    return this.http.post(this.user_port + "/signUp", user, { responseType: 'text' });
  }

  signUpFunds(user: User): Observable<any> {
    return this.http.post(this.funds_port + "/createFundsAccount", user, { responseType: 'text' });
  }

  fetchFunds(user: User): Observable<any> {
    return this.http.post(this.funds_port + "/fetchFunds", user, { responseType: 'text' });
  }

  editProfile(user: User): Observable<any> {
    return this.http.post(this.user_port + "/editProfile", user, { responseType: 'text' });
  }

  addFunds(user: User): Observable<any> {
    return this.http.post(this.funds_port + "/addFunds", user, { responseType: 'text' });
  }

  subtractFunds(user: User): Observable<any> {
    return this.http.post(this.funds_port + "/subtractFunds", user, { responseType: 'text' });
  }

  raiseTicket(ticket:Ticket):Observable<any>{
    return this.http.post(this.user_port+"/createTicket",ticket,{responseType:'text'});
  }
  addToCart(item: Product): Observable<any> {
    return this.http.post(this.product_port + "/addProduct", item, { responseType: 'text' });
  }

  fetchCart(item: Product): Observable<any> {
    return this.http.post(this.product_port + "/getAllProducts", item, { responseType: 'text' });
  }

  submitOrder(user: User): Observable<any> {
    return this.http.post(this.status_port + "/createStatus", user, { responseType: 'text' });
  }

  getOrder(user: User): Observable<any> {
    return this.http.post(this.status_port + "/fetchStatus", user, { responseType: 'text' });
  }

}
