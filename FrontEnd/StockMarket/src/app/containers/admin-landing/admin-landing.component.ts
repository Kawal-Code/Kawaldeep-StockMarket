import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  ImportData()
  {
    localStorage.clear();
    this.router.navigate(['/ImportData'])
  }
  ManageCompanies()
  {
    localStorage.clear();
    this.router.navigate(['/ManageCompanies'])

  }
  ManageExchange()
  {
    localStorage.clear();
    this.router.navigate(['/ManageExchanges'])
  }
  UpdateIPO()
  {
    localStorage.clear();
    this.router.navigate(['/UpdateIPO'])
  }
}
