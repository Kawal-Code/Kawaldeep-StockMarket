import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { StockExchange } from 'src/app/Models/stock-exchange';

@Component({
  selector: 'app-manage-stock-exchanges',
  templateUrl: './manage-stock-exchanges.component.html',
  styleUrls: ['./manage-stock-exchanges.component.css']
})
export class ManageStockExchangesComponent implements OnInit {
  id: number;
  stockExchange1: string;
  brief:string;
  contactAddress:string;
  remarks: string;
  list: StockExchange[];
  errmsg: string;
  obj: StockExchange;
  stock: StockExchange[] = [];
  @Input() exchange : StockExchange;
  constructor(private  router: Router, public service: StockExchangeService) {
    this.service.GetCompanies().subscribe(i=>{
      this.list=i
      console.log(this.list)
    })
   }

  ngOnInit(): void {
  }
  public Add()
  {
    localStorage.clear();
    this.router.navigate(['/AddStockExchange'])
  }
  public Editt(id:number)
  {console.log(id)
    localStorage.clear();
    this.router.navigate(['/EditStockExchange']);
  }
  public Delete(id: number)
  {  console.log(id)
    this.service.Delete(id).subscribe(error=>{
     console.log(error);
     localStorage.clear();
    this.router.navigate(['/ManageExchanges'])
    })
    
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