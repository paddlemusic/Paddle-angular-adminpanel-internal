import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, NavigationExtras } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad{

  constructor(public authService: AuthService,
    private commonService: CommonService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const url: string = state.url;
    console.log("Url is:", url)
    return this.checkLogin(url)
  }
  

  canLoad(route: any): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean {
    const url = `/${route.path}`;
    console.log("canload called:", this.authService.isAuthenticated())
    if (!this.authService.isAuthenticated()) {
      this.commonService.navigate('/auth/login');
      return false;
    }
    return this.authService.isLoggedIn         // {1}
    .pipe(
      take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
        console.log("isLoggedIn", isLoggedIn)
        const sessionId = 123456789;
        const navigationExtras: NavigationExtras = {
          queryParams: { session_id: sessionId },
          fragment: 'anchor'
        };
          if (!isLoggedIn) {
            this.commonService.navigate('/auth/login');  // {4}
            return false;
          }
          return true;
        })
      )
  }


 
  checkLogin(url :string){
    if (!this.authService.isAuthenticated()) {
      this.commonService.navigate('');
      return false;
    }
    return this.authService.isLoggedIn         // {1}
    .pipe(
      take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
        console.log("isLoggedIn", isLoggedIn)
        const sessionId = 123456789;
        const navigationExtras: NavigationExtras = {
          queryParams: { session_id: sessionId },
          fragment: 'anchor'
        };
          if (!isLoggedIn) {
            this.commonService.navigate('');  // {4}
            return false;
          }
          return true;
        })
      )
  }
}
