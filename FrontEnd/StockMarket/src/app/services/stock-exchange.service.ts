import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {  Observable} from "rxjs";
import { StockExchange} from '../Models/stock-exchange';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {
  path:string="http://localhost:50032/ManageStock/"
list :StockExchange[];
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  public GetCompanies():Observable<StockExchange[]>
  {
    return this.http.get<StockExchange[]>(this.path+"GetStockExchangeList")
    .pipe(catchError(this.errorHandler));
  }
  public Get(id:number):Observable<StockExchange>
  {
    console.log(id);
    return this.http.get<StockExchange>(this.path+'GetById/'+id)
    .pipe(catchError(this.errorHandler));
  }
  
  public Add(item:StockExchange):Observable<StockExchange>
  {
    console.log(item);
    return this.http.post<StockExchange>(this.path+"Add",item,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
  })
}).pipe(catchError(this.errorHandler));
  }
    
  public Edit(item:StockExchange):Observable<any>
  {
    console.log(item);
    return this.http.put<any>(this.path +'Edit',item)
     
       .pipe(catchError(this.errorHandler));
  }
 

 public Delete(id:number):Observable<any>
  { 
    console.log(id);
    return this.http.delete<any>(this.path+"Delete/"+id).pipe(catchError(this.errorHandler));;
    
  }
  /*public save(item:StockExchange){
    const foundIndex = this.list.findIndex(e =>e.id ==item.id);
    this.list[foundIndex] = item;
  }*/
 
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
