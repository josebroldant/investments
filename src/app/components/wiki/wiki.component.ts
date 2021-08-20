import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  constructor(private router: Router) { }

  goToHome(){
    this.navigateTo("/home");
  }

  navigateTo(to: string){
    this.router.navigate([to]); 
  }

  ngOnInit(): void {
  }

}
