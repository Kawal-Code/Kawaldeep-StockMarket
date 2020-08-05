import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { Ipodetails } from '../Models/ipodetails';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

  
export class UpdateipoService {
  path:string=" http://localhost:50032/CompanyRelated/"
  constructor(private http:HttpClient) { }
  public GetIPO():Observable<Ipodetails[]>
  {
    return this.http.get<Ipodetails[]>(this.path+"GetIPO")
    .pipe(catchError(this.errorHandler));
  }
  public Add(item:Ipodetails):Observable<any>
  {
    console.log(item);
    return this.http.post<any>(this.path+"AddIPO",item)
    .pipe(catchError(this.errorHandler));;
  }

  public Edit(item:Ipodetails):Observable<any>
  {
    console.log(item);
    return this.http.put<any>(this.path+"EditIPO",item)
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
