import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  //GRAPH

  //data
  single: any[] = [];
  multi: any[] = [];

  //dimensions
  view: any[] = [700, 400];

  // options
  gradient = true;
  showLegend = false;
  showLabels = true;

  customColors = {
    domain: ['green', 'yellow', 'red', 'black']
  };

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private router: Router) {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }

  goToDetailedInfo(){
      this.navigateTo("/detailed-sum");
  }

  navigateTo(to: string){
    this.router.navigate([to]); 
  }

  ngOnInit(): void {
  }

}
