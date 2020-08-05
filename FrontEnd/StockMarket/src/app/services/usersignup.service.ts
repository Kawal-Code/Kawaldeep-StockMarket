import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { User } from '../Models/user';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersignupService {
  path:string="http://localhost:50032/Account/"
  constructor(private http:HttpClient) { }
  public SignUp(item:User)
  {
    console.log(item);
    return this.http.post(this.path+"SignUp",item).pipe(catchError(this.errorHandler));
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
