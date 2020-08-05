
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { Stockprice } from 'src/app/Models/stockprice';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  path:string="http://localhost:50032/Stock/ImportStock"
  constructor(private http:HttpClient) { }
  public GetCompanies():Observable<Stockprice[]>
  {
    return this.http.get<Stockprice[]>(this.path)
    .pipe(catchError(this.errorHandler));
  }
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
