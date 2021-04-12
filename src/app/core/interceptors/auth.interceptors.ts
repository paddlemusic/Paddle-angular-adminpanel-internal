import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap , map} from 'rxjs/operators';
import { CommonService } from "@app/shared/services/common.service";
import { AuthService } from "@app/shared/services/auth.service";
import { LoaderService } from "@app/shared/components/layout/loader/loader.service";
import { ModalService } from "@app/shared/services/modal.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService : AuthService,
    private loaderService : LoaderService,
    private modalService : ModalService,
    private commonService : CommonService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //need to add Header  
    this.showLoader();
    if(this.authService.isAuthenticated()){
        const token = this.commonService.getLocalStorage('token', false);
    request = request.clone({
        setHeaders: { 
            Authorization: token
        }
    });
 }
    return this.makeRequest(next , request)
  }

  makeRequest(next: HttpHandler, req: HttpRequest<any>): Observable<any> {
      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // console.log('event--->>>', event);
                this.onEnd();
                    // console.log('all looks good');
                     // http response status code
                     // console.log(event.status);
            }
            return event;
        }),  
        catchError((err: HttpErrorResponse) => {
          console.log("Err is", err)
          this.onEnd();
          if (err.status === 401) {
            // auto logout if 401 response returned from api
            let body = {
                access_token : this.commonService.getLocalStorage('token', false)
            }
           this.authService.signOut()    
        }

        const error = err.error.error.message || err.statusText;
        return throwError(error);
    }))
}


public onEnd(): void {
    this.hideLoader();
}
public showLoader(): void {
    console.log("Loader called:")
    this.loaderService.show();
}
public hideLoader(): void {
    this.loaderService.hide();
}
}