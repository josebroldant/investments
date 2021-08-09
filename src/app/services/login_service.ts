import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class loginService {

  estado: boolean = false;

  login(usuario: string, contra: string): Observable<boolean>{
    this.estado = false;
    if(usuario=='admin' && contra=='1234567890'){
      this.estado = true;
    }
    else{
      this.estado = false;
    }
    return of(this.estado);
  }

  constructor(private router: Router){}
}