import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http: HttpClient) { }

  empSignInAccount(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/loginEmployee", employee, { responseType: 'text' });
  }
  empChangePassword(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/changePassword", employee, { responseType: 'text' });
  }
  admSignInAccount(admin: Admin): Observable<any> {
    return this.http.post("http://localhost:9090/api/admin/admSignIn", admin, { responseType: 'text' });
  }
}
