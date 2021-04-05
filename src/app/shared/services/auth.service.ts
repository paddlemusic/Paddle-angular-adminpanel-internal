import { Injectable } from '@angular/core';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import { apiUrls } from '@app/shared/constants/apiUrls'
import { map } from 'rxjs/operators';
import { CommonService } from '../../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private commonService: CommonService,
    private requestService : RequestService) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  public isAuthenticated(): boolean {
    const token = this.commonService.getLocalStorage('token', false);
    // Check whether the token is expired and return
    console.log("Token is:", token);
    // true or false
    if (token) {
      this.loggedIn.next(true);
      return true
    } else {
        return false
    };
  }

  login(user: any) {
    return this.requestService.post(environment.baseUrl + apiUrls.login,user);    
  }
    /**
   * Signs out
   */
     signOut() {
       console.log("IN signout")
      this.loggedIn.next(false);
      this.commonService.clearLocalStorage();
      this.commonService.clearSessionStorage();
      this.commonService.navigate('/auth/login');
    }


  // logout() {
  //   return this.requestService.post(environment.baseUrl + apiUrls.logout , {} )
  // }
}
