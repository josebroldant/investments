import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigateService } from 'src/app/services/navigate_service';
import { single } from './data2';

@Component({
  selector: 'app-det-sum-etfs',
  templateUrl: './det-sum-etfs.component.html',
  styleUrls: ['./det-sum-etfs.component.css']
})
export class DetSumEtfsComponent implements OnInit {

  //GRAPH

  //data
  single: any[] = [];
  multi: any[] = [];

  //dimensions
  view: any[] = [1000, 300];

  // options
  
  legend = true;
  legendTitle = 'Crypto Currency';
  labels = true;

  colorScheme = {
    domain: ['blue', 'cyan', 'grey', 'yellow']
  };

  constructor(private router: Router) {
    Object.assign(this, { single })
  }

  onSelect(event: any) {
    console.log(event);
  }

  goToSumEtfs(){
      this.navigateTo("/sum-etfs");
  }

  goToWiki(){
    this.navigateTo("/wiki");
  }

  navigateTo(to: string){
    this.router.navigate([to]); 
  }

  ngOnInit(): void {
  }

}
