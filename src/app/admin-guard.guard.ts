import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //Write our Authentication & Authorization Code here
        //This likely involves calling a user service -- we pass the user & password into it and ensure the password is correct.
    return false; //by returning false here, we ensure that the user CAN'T see this data
  }
  
}
