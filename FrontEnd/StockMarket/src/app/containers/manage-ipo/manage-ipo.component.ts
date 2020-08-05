import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewipoService } from 'src/app/services/viewipo.service';
import { Ipodetails } from 'src/app/Models/ipodetails';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {
list: Ipodetails[];
  constructor(private router:Router, private service:ViewipoService) {
    this.service.ViewIpos().subscribe(i=>{
      this.list=i
      console.log(this.list)
    })
   }

  ngOnInit(): void {
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
