import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Admin()
  { 
    localStorage.clear();
    this.router.navigate(['/Admin'])

  }

  User()
  {
    localStorage.clear();
    this.router.navigate(['/User'])

  }
}
