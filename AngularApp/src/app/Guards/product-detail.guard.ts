import { invalid } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private routes: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +route.url[1].path
    if (isNaN(id) || id < 1) {
      alert("invalid Product Id")
      this.routes.navigate(["/products"])
      return false
    }
    return true;
  }

}
