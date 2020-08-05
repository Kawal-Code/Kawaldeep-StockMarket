import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  name:string;
  path:string;
  constructor(private router:Router) { }

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
  Upload()
  {
    console.log(this.name);
    this.router.navigate(['/ImportExcel'])

  }
  fileEvent(event)
  {

    this.name = event.target.files[0].name;
    alert(this.name);
  }

}
