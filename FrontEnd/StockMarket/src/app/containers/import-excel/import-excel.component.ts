import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { Stockprice } from 'src/app/Models/stockprice';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  companyCode:number;
  stockExchage: string;
  currentPrice:string;
  date:string;
  time:string;
  list: Stockprice[];
  constructor(private router:Router, private service:StockPriceService) {
    this.service.GetCompanies().subscribe(i=>{
      this.list=i
      console.log(this.list)
    })
   }

  ngOnInit(): void {
  }
 Exit()
{ 
  localStorage.clear();
  this.router.navigate(['/AdminLanding'])
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
