import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { StockExchange } from 'src/app/Models/stock-exchange';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  stockExchange1: string;
  brief:string;
  contactAddress:string;
  remarks: string;
  list: StockExchange[];
  errmsg: string;
  obj: StockExchange;
  constructor(private router: Router, private service: StockExchangeService) {
    this.service.GetCompanies().subscribe(i=>{
      this.list=i
      console.log(this.list)
    })
   }

  ngOnInit(): void {
  }
  Edit()
  {
    localStorage.clear();
    this.router.navigate(['/EditStockExchange'])
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
