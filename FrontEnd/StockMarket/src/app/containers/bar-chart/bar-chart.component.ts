import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js'; 
import { BarChart } from 'src/app/Models/bar-chart';
import { Router } from '@angular/router';
import { BarchartService } from 'src/app/services/barchart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: BarChart[];  
  companyName = [];  
  pricePerShare = [];  
  totalShares =[];
  stockExchange =[];
  public barchart={};

  constructor( private service: BarchartService,private router:Router) {
    this.service.GetCompanies().subscribe((result: BarChart[]) => {  
      result.forEach(x => {  
        this.companyName.push(x.companyName); 
        console.log(this.companyName);
        this.pricePerShare.push(x.pricePerShare);  
        console.log(this.pricePerShare);
        this.totalShares.push(x.totalShares);  
        console.log(this.totalShares);
        this.barchart;
        this.stockExchange.push(x.stockExchange); 
        console.log(this.stockExchange);
      });
    /*  this.barchart = new Chart('canvas2', {  
        type: 'bar',  
        data: {  
          labels: this.stockExchange,
          datasets: [  
            { 
              data: this.totalShares,}]
        }
      });*/
      this.barchart = new Chart('canvas', {  
        type: 'bar', 
        data: {  
          labels: this.companyName,
          datasets: [  
            { 
              data: this.pricePerShare,
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true 
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
   });
  }


  ngOnInit() {}
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
