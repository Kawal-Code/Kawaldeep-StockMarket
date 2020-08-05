import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { CompanyRelated } from '../Models/company-related';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyRelatedService {

  path:string="http://localhost:50032/CompanyRelated/"
  constructor(private http:HttpClient) { }
  public GetCompanies():Observable<CompanyRelated[]>
  {
    return this.http.get<CompanyRelated[]>(this.path+"GetCompanies")
    .pipe(catchError(this.errorHandler));
  }
  public Get(companyName:string):Observable<any>
  {
    console.log(companyName);
    return this.http.get<any>(this.path+'GetById/'+companyName)
    .pipe(catchError(this.errorHandler));
  }
  public Add(item:CompanyRelated)
  {
    console.log(item);
    return this.http.post(this.path+"Add",item)
    .pipe(catchError(this.errorHandler));
  }
  public Edit(item:CompanyRelated):Observable<any>
  {
    console.log(item);
    return this.http.put<any>(this.path+"Edit",item).pipe(catchError(this.errorHandler));
  }
  public Delete(companyName:string):Observable<any>
  {
    console.log(companyName);
    return this.http.delete<any>(this.path+'Delete/'+companyName).pipe(catchError(this.errorHandler));
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
