import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_port = "http://localhost:9090/api/user";
  funds_port = "http://localhost:9090/api/funds";

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
}
