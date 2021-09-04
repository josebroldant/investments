import { Component, OnInit } from '@angular/core';
import { single } from './data3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-det-proj',
  templateUrl: './det-proj.component.html',
  styleUrls: ['./det-proj.component.css']
})
export class DetProjComponent implements OnInit {

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

  goToProjects(){
    this.navigateTo("/projects");
  }

  ngOnInit(): void {
  }

}
