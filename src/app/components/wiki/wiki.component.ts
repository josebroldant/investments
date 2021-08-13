import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  constructor(private router: Router) { }

  goToSummary(){
    this.navigateTo("/summary");
  }

  navigateTo(to: string){
    this.router.navigate([to]); 
  }

  ngOnInit(): void {
  }

}
