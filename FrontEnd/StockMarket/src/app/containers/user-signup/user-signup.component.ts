import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';

import { UsersignupService } from 'src/app/services/usersignup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
obj: User;
username: string;
password: string;
usertype: string;
mobilenumber: string;
email: string;
confirmpassword: string;
  constructor(private service:UsersignupService,private router:Router) { }

  ngOnInit(): void {
  }
 public Add(myForm2: NgForm)
 {console.log(myForm2.value);
   this.obj=new User();
  this.obj.username=this.username;
  this.obj.password=this.password;
  this.obj.confirmpassword=this.confirmpassword;
  this.obj.usertype="1";
  this.obj.mobilenumber=this.mobilenumber;
  this.obj.email=this.email;
 this.service.SignUp(this.obj).subscribe((response)=>
 { 
 },(error)=>{
   console.log(error)
   console.log(error.error.text)
   
 })
 localStorage.clear();
 this.router.navigateByUrl('/NewUser')
 }
 Cancel()
 {
  localStorage.clear();
  this.router.navigateByUrl('/Home')
 }
}
