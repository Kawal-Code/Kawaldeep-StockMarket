import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { Ipodetails } from '../Models/ipodetails';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViewipoService {
  path:string="http://localhost:50032/ViewIPO/GetIPOs"
  constructor(private http:HttpClient) { }
  public ViewIpos():Observable<Ipodetails[]>
  {
    return this.http.get<Ipodetails[]>(this.path).pipe(catchError(this.errorHandler));
    
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
