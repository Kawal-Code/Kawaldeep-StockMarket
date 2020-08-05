import { Component, OnInit, ViewChild, NgModuleDecorator, Input } from '@angular/core';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockExchange } from 'src/app/Models/stock-exchange';
import { error } from 'protractor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editstockexchange',
  templateUrl: './editstockexchange.component.html',
  styleUrls: ['./editstockexchange.component.css']
})
export class EditstockexchangeComponent implements OnInit {
  @ViewChild('myForm3') public createForm: NgForm;
id: number;
  stockExchange1: string;
  brief:string;
  contactAddress:string;
  remarks: string;
  list: StockExchange[];
  errmsg: string;
  obj: StockExchange;
  @Input() exchange: StockExchange;
  constructor(private router: Router, private service: StockExchangeService, private _route : ActivatedRoute) { }

  ngOnInit(){
   /* this._route.paramMap.subscribe(parameterMap =>{
      const id = +parameterMap.get('id');
      this.Get(id);
    })*/
  }

 /* private Get(id:number){
  
   this.service.Get(id).subscribe(
    (obj) => this.obj =obj,
    (err : any)=> console.log(err)
  );
}*/


Edit(myForm3 :NgForm)
{

  this.obj={id:Number (this.id),
    stockExchange1:this.stockExchange1,
    brief:this.brief,
    contactAddress:this.contactAddress,
    remarks:this.remarks,
    };
    this.service.Edit(this.obj).subscribe(
      ()=> 
      {
        this.router.navigate(['/ManageExchanges'])
      },
      (error :any) => console.log(error)
    )

 }
}
 
  /*Edit(myForm3 :NgForm)
  { this.obj={id:Number (myForm3.id),
    stockExchange1:this.stockExchange1,
    brief:this.brief,
    contactAddress:this.contactAddress,
    remarks:this.remarks,
    };
    
    this.service.Edit(this.obj).subscribe(
      ()=> 
      { myForm3.reset();
        this.router.navigate(['/ManageExchanges'])
      },
      (error :any) => console.log(error)
    )
  }
}*/
/*Editt(): void
{
const neww: StockExchange = Object.assign({}, this.obj);
this.service.save(neww);
this.router.navigate(['ManageExchanges'])
}*/

  /*public Edit(myForm3: NgForm)
 {
    this.obj={id:Number (this.id),
      stockExchange1:this.stockExchange1,
      brief:this.brief,
      contactAddress:this.contactAddress,
      remarks:this.remarks,
      };
    this.service.Edit(this.obj).subscribe(i=>{
      console.log(i)
      myForm3.reset();
    })
    localStorage.clear();
    this.router.navigate(['/ManageExchanges'])
  }*/

