import { HttpClient, HttpClientModule, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }

  uploadProgress<T>( cb: ( progress: number ) => void ) {
    return tap(( event: any  ) => {
      if ( event.type === HttpEventType.UploadProgress ) {
        cb(Math.round((100 * event.loaded) / event.total));
      }
    });
  }

  uploadFile(url:string, body:any){
    return this.http.post(url, body)
  }
   toResponseBody<T>() {
    return pipe(
      filter(( event: any ) => event.type === HttpEventType.Response),
      map(( res: HttpResponse<T> ) => res.body)
    );
  }
}
