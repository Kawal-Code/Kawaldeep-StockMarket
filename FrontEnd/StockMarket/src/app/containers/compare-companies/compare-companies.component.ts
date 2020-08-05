import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipodetails } from 'src/app/Models/ipodetails';

@Component({
  selector: 'app-compare-companies',
  templateUrl: './compare-companies.component.html',
  styleUrls: ['./compare-companies.component.css']
})
export class CompareCompaniesComponent implements OnInit {
remark:string;
companyName:string;
stockExchange: string;
pricePerShare: number;
totalShare: number;
openDateTime: Date;
obj: Ipodetails;
fromPeriod: Date;
toPeriod : Date;
list: string[]=["NSE","BSE"]
  constructor(private router:Router) { 
    this.obj = new Ipodetails;
  }

  ngOnInit(): void {
  }
  Add()
  {
    this.obj.remark = this.remark;
  }
  Compare()
  { 
    localStorage.clear();
    this.router.navigate(['/BarChart'])

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
