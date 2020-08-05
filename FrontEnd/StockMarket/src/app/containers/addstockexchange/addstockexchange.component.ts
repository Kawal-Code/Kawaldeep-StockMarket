import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/Models/stock-exchange';

@Component({
  selector: 'app-addstockexchange',
  templateUrl: './addstockexchange.component.html',
  styleUrls: ['./addstockexchange.component.css']
})
export class AddstockexchangeComponent implements OnInit {
  stockExchange1: string;
  brief:string;
  contactAddress:string;
  remarks: string;
  list: StockExchange[];
  errmsg: string;
  obj: StockExchange;
  constructor(private router: Router, private service: StockExchangeService) { }

  ngOnInit(): void {
  }
  public Add()
  {
   this.obj=new StockExchange();
   this.obj.stockExchange1=this.stockExchange1;
   this.obj.brief=this.brief;
   this.obj.contactAddress=this.contactAddress;
   this.obj.remarks=this.remarks;
   
  this.service.Add(this.obj).subscribe((response)=>
  {
  },(error)=>{
    console.log(error)
    console.log(error.error.text)
  })
  localStorage.clear();
  this.router.navigate(['/ManageExchanges'])
  }

}
