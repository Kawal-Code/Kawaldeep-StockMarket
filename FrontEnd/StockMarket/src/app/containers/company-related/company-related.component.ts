import { Component, OnInit } from '@angular/core';
import { CompanyRelated } from 'src/app/Models/company-related';
import { Router } from '@angular/router';
import { CompanyRelatedService } from 'src/app/services/company-related.service';
import { strict } from 'assert';
@Component({
  selector: 'app-company-related',
  templateUrl: './company-related.component.html',
  styleUrls: ['./company-related.component.css']
})
export class CompanyRelatedComponent implements OnInit {
  list : CompanyRelated[];
  companyName: string;
  turnover: string;
  ceo: string;
  boardofDirectors: string;
  listInStockExchanges: string;
  obj : CompanyRelated;
  errmsg : string;
  
constructor(private service:CompanyRelatedService,private router:Router) {
  this.service.GetCompanies().subscribe(i=>{
    this.list=i
    console.log(this.list);
  })
}

  ngOnInit(): void {
  }
  Search()
  {
    this.service.Get(this.companyName).subscribe(item=>{

      console.log(item);
      this.obj=item;
      this.companyName=this.obj.companyName;
      this.turnover=this.obj.turnover;
      this.ceo=this.obj.ceo;
      this.boardofDirectors=this.obj.boardofDirectors;
      this.listInStockExchanges=this.obj.listInStockExchanges;
      this.errmsg="Invalid Company";
    },
    (error)=>{
      console.log(error);
console.log(error.error);
console.log(error.status);
console.log(error.statusText);
if(error.status==404)
{
  this.router.navigateByUrl("/notfound")
}
    })

  }
  public Add()
  {
   this.obj=new CompanyRelated();
   this.obj.companyName=this.companyName;
   this.obj.turnover=this.turnover;
   this.obj.ceo=this.ceo;
   this.obj.boardofDirectors=this.boardofDirectors;
   this.obj.listInStockExchanges=this.listInStockExchanges;
  this.service.Add(this.obj).subscribe((response)=>
  {
  },(error)=>{
    console.log(error)
    console.log(error.error.text)
  })
  }
  public Edit()
  {
    this.obj={companyName:String(this.companyName),
      turnover:this.turnover,
      ceo:this.ceo,
      boardofDirectors:this.boardofDirectors,
      listInStockExchanges:this.listInStockExchanges,};
    this.service.Edit(this.obj).subscribe(i=>{
      console.log(i)
    })
  }
  public Delete()
  {
    this.service.Delete(this.companyName).subscribe(res=>{
      console.log(res);
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
