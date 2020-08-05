import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  item: User;
  list: User[];
  username: string;
  password: string;
  usertype: string;
  mobilenumber: string;
  email : string;
  obj: User;
  errmsg : string;
  constructor(private router:Router,private service:UserService) {
   }
  

  ngOnInit(): void {
  }
  SignUp()
    { localStorage.clear();
      this.router.navigateByUrl('/SignUp')
    }
  LogIn(myForm : NgForm):void
    { console.log(myForm.value);
      this.service.LogIn(this.username,this.password).subscribe(item=>{

        console.log(item);
        this.obj=item;
        this.username=this.obj.username;
        this.password=this.obj.password;
        this.router.navigateByUrl("/UserLanding")
        this.errmsg="Invalid username and password";
      },
      (error)=>{
        console.log(error);
  console.log(error.error);
  console.log(error.status);
  console.log(error.statusText);
  if(error.status==404)
  { 
    this.router.navigateByUrl("/NotFound")
  }
      })
    //this.item={username: this.username, password: this.password, usertype: this.usertype, mobilenumber: this.mobilenumber, email: this.email};
    //console.log(this.item);
   // if(this.item.username == "Admin" && this.item.password =="12345")
    //{ localStorage.setItem("username",this.item.username)
     // this.router.navigateByUrl('/UserLanding')
    }

}

