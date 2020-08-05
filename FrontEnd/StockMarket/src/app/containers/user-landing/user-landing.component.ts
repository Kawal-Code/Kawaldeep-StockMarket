import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  IPOs()
  {
    localStorage.clear();
    this.router.navigate(['/GetIPO'])
  }
  CompareCompanies()
  {
    localStorage.clear();
    this.router.navigate(['/Compare'])
  }
  Other()
  {
    localStorage.clear();
    this.router.navigate(['/nothing'])
  }

}
