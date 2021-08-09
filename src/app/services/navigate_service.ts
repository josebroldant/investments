import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class navigateService {

  navigateTo(to: string){
    this.router.navigate([to]);/*this.router.navigate([to, this.usuario])    --->   /terms/usuario   */ 
  }

  constructor(private router: Router){}
}