import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormateurService } from './Services/formateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _uf: FormateurService, private _router: Router) {}
  canActivate(): boolean {
    if (this._uf.isLoggedIn) {
      return true;
    }
    else {
      
      this._router.navigate(['']);
      return false;
    }
  }
  
}
