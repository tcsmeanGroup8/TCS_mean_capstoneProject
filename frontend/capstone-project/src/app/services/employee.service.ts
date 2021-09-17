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

  ROOT = "http://localhost:9090/api/employee";


  empSignInAccount(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/loginEmployee", employee, { responseType: 'text' });
  }
  empChangePassword(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/changePassword", employee, { responseType: 'text' });
  }
  admSignInAccount(admin: Admin): Observable<any> {
    return this.http.post("http://localhost:9090/api/admin/admSignIn", admin, { responseType: 'text' });
  }

  addEmployee(emp:Employee): Observable<any>{
    return this.http.post(this.ROOT+"/addEmployee", emp, { responseType: 'json' });
  }

  deleteEmployee(emp:Employee): Observable<any>{
    return this.http.delete(this.ROOT+"/deleteEmployee/"+emp.emailid);
  }
}
