import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable,throwError} from 'rxjs';
import{tap,catchError} from 'rxjs/operators';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  hostlink = "http://localhost:8080";
  apilink = "/api/product/getAllProductDetails";
  constructor(public http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    let url = this.hostlink+this.apilink;
    return this.http.get<Product[]>(url).pipe(tap(data)=>console.log(data)),catchError(error=>throwError(error))
  }
}
