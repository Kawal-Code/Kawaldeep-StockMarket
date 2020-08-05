import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateipoService } from 'src/app/services/updateipo.service';
import { Ipodetails } from 'src/app/Models/ipodetails';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  id: number;
  companyName:string;
  stockExchange: string;
  pricePerShare: number;
  totalShare: number;
  openDateTime: Date;
  remark: string;
  obj: Ipodetails;
  list: Ipodetails[];
  constructor(private router:Router, private service: UpdateipoService) {
    this.service.GetIPO().subscribe(i=>{
      this.list=i
      console.log(this.list)
    })
   }

  ngOnInit(): void {
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
  public Addd()
  {
    localStorage.clear();
    this.router.navigate(['/AddIPO'])
  }
  public Edit()
  {
    localStorage.clear();
    this.router.navigate(['/EditIPO'])
  }
 

}
