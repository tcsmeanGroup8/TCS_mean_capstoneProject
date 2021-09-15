import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_port = "http://localhost:9090/api/user";

  constructor(public http: HttpClient) { }

  signInAccount(user: User): Observable<any> {
    return this.http.post(this.user_port + "/signIn", user, { responseType: 'text' });
  }

  signUpAccount(user: User): Observable<any> {
    return this.http.post(this.user_port + "/signUp", user, { responseType: 'text' });
  }
}
