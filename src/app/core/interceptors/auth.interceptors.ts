import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { CommonService } from "@app/shared/services/common.service";
import { AuthService } from "@app/shared/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService : AuthService,
    private commonService : CommonService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //need to add Header  
    if(this.authService.isAuthenticated()){
        const token = this.commonService.getSessionStorage('token', false);
    request = request.clone({
        setHeaders: { 
            Authorization: token
        }
    });
    
}
    return this.makeRequest(next , request)
  }

  makeRequest(next: HttpHandler, req: HttpRequest<any>): Observable<any> {
      return next.handle(req).pipe(catchError(err => {
          console.log("Err is", err)
          if (err.status === 401) {
            // auto logout if 401 response returned from api
            let body = {
                access_token : this.commonService.getLocalStorage('token', false)
            }
            // this.authService.logout(body);
        }

        const error = err.error.error.message || err.statusText;
        return throwError(error);
    }))
}
}