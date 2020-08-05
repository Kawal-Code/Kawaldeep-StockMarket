import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateipoService } from 'src/app/services/updateipo.service';
import { Ipodetails } from 'src/app/Models/ipodetails';

@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIpoComponent implements OnInit {
  id: number;
  companyName:string;
  stockExchange: string;
  pricePerShare: number;
  totalShare: number;
  openDateTime: Date;
  remark: string;
  obj: Ipodetails;
  list: Ipodetails[];
  errmsg: string;
  constructor(private router:Router, private service: UpdateipoService) { }

  ngOnInit(): void {
  }
  public Edit()
  {
    this.obj={companyName:String(this.companyName),
      id: this.id,
      stockExchange:this.stockExchange,
     pricePerShare:this.pricePerShare,
      totalShare:this.totalShare,
    openDateTime:this.openDateTime,
    remark:this.remark,};
    this.service.Edit(this.obj).subscribe(i=>{
      console.log(i)
    })
    localStorage.clear();
    
    this.router.navigate(['/UpdateIPO'])
  }
  

}
