import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { forkJoin, Observable, pipe, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { apiUrls } from '../constants/apiUrls';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _http: HttpClient) { }

    /**
   * function to call get api
   * @param url: api url
   * @param params: query params object
   * @param headers: headers to pass in api call
   */
  get(url: string, params?: any, headers?: any) {
    return this._http.get(url, {
      params,
      headers
    }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          err = err.error ? err.error.errors: err.error;
        }
        return throwError(err);
      })
    );
  }


  /**
  * 
  * @param url: api url
  * @param body: data to send in body
  * @param headers: headers to pass in api call
  * function to call post api and returns a observable
  */
 post(url: string, body: any, params?:any, headers?: any) {
  return this._http.post(url, body, { headers, params })
    .pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          err = err.error ? err.error.errors: err.error;
        }
        return throwError(err);
      })
    )
  }

  put(url: string, body: any, params?:any, headers?: any) {
    return this._http.put(url, body, { headers, params })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err)=>{
          if(err instanceof HttpErrorResponse){
            err = err.error ? err.error.errors: err.error;
          }
          return throwError(err);
        })
      )
    }
  delete(url: string, body: any, params?:any, headers?: any) {
    return this._http.delete(url, body)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err)=>{
          if(err instanceof HttpErrorResponse){
            err = err.error ? err.error.errors: err.error;
          }
          return throwError(err);
        })
      )
    }


    sendMail(body:any, mailToken:string){
    const httpOptions = {
       headers :  new HttpHeaders({
        'mailtoken': mailToken
      })
    };
    let url:string = environment.baseUrl + apiUrls.resetPassword;
    return this._http.post(url, body , httpOptions).pipe(
      map((res:any)=>{
      console.log("http option:", res)
      return res;
    })
        )
    }
  


//Parallel API hit
  // hitParalletGetApis(dataSet : any):Observable<any> {
  //   let forkArray:string[] = [];
  //   dataSet.forEach((data:any) => {
  //     console.log
  //     forkArray.push(this.get(data["item"], data["local"] ));
  //   });
  //   return forkJoin(forkArray);
  // }


}
