import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {  Observable} from "rxjs";
import { User} from '../Models/user';
import { AdminLoginComponent } from '../containers/admin-login/admin-login.component';
import { UserLoginComponent } from '../containers/user-login/user-login.component';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string="http://localhost:50032/Account/Login/"
  constructor(private http:HttpClient) { }

public LogIn(username:string,password:string):Observable<User>
{
  console.log(username);
  console.log(password);
  return this.http.get<User>(this.path+username+'/'+password)
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