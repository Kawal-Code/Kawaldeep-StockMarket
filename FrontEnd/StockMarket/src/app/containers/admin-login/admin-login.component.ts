import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
item: User;
username: string;
password: string;
confirmpassword: string;
usertype: string;
mobilenumber: string;
email : string;
msg: any = "Invalid Credentials";
  constructor(private router:Router) {
    this.item = new User();
   }

  ngOnInit(): void {
  }
  Validate(myForm : NgForm):void
  {console.log(myForm.value);
    this.item={confirmpassword: this.confirmpassword,username: this.username, password: this.password, usertype: this.usertype, mobilenumber: this.mobilenumber, email: this.email};
    console.log(this.item);
    if(this.item.username == "Admin" && this.item.password =="12345")
      {localStorage.setItem("username",this.item.username)
       console.log("login success");
      this.router.navigateByUrl('/AdminLanding')
     
    }
    else
    {
      console.log("Login failed");

      
    }
  }

}
