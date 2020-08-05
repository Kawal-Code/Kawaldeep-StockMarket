import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateipoService } from 'src/app/services/updateipo.service';
import { Ipodetails } from 'src/app/Models/ipodetails';
@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {
  companyName:string;
  stockExchange: string;
  pricePerShare: number;
  totalShare: number;
  openDateTime: Date;
  remark: string;
  obj: Ipodetails;
  list: Ipodetails[];
  errmsg : string;
  constructor(private router:Router, private service: UpdateipoService) { }

  ngOnInit(): void {
  }
  public Add()
  {
   this.obj=new Ipodetails();
   
   this.obj.companyName=this.companyName;
   this.obj.stockExchange=this.stockExchange;
   this.obj.pricePerShare=this.pricePerShare;
   this.obj.totalShare=this.totalShare;
   this.obj.openDateTime=this.openDateTime;
   this.obj.remark=this.remark;
  this.service.Add(this.obj).subscribe((response)=>
  {
  },(error)=>{
    console.log(error)
    console.log(error.error.text)
  })
  localStorage.clear();
  this.router.navigate(['/UpdateIPO'])
  }

}
