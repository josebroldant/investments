import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data3';
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    domain: ['blue', 'cyan', 'grey', 'black']
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

  navigateTo(to: string){
    this.router.navigate([to]); 
  }

  goToSummary(){
    this.navigateTo("/summary");
  }

  goToSumEtfs(){
    this.navigateTo("/sum-etfs");
  }

  ngOnInit(): void {
  }

}
