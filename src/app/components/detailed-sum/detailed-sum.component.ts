import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigateService } from 'src/app/services/navigate_service';

@Component({
  selector: 'app-detailed-sum',
  templateUrl: './detailed-sum.component.html',
  styleUrls: ['./detailed-sum.component.css']
})
export class DetailedSumComponent implements OnInit {

  constructor(private router: Router) { }

  navigation(){
      this.navigateTo("/summary");
  }

  navigateTo(to: string){
    this.router.navigate([to]);/*this.router.navigate([to, this.usuario])    --->   /terms/usuario   */ 
  }

  ngOnInit(): void {
  }

}
