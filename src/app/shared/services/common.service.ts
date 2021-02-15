import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) { }


  //Storage Methods
  getLocalStorage(key: string, isParse: boolean) {
    if (isParse) {
      let retrievedObject: any = localStorage.getItem(key);
      return JSON.parse(retrievedObject)
    }
    return localStorage.getItem(key)
  }

  setLocalStorage(key: string, value: any, isStringify: boolean): void {
    if (isStringify) {
      localStorage.setItem(key, JSON.stringify(value))
      return;
    }
    localStorage.setItem(key, value)
  }

  removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }




  getSessionStorage(key: string, isParse: boolean) {
    if (isParse) {
      let retrievedObject: any = sessionStorage.getItem(key);
      return JSON.parse(retrievedObject)
    }
    return sessionStorage.getItem(key)
  }

  setSessionStorage(key: string, value: any, isStringify: boolean): void {
    if (isStringify) {
      sessionStorage.setItem(key, JSON.stringify(value))
      return;
    }
    sessionStorage.setItem(key, value)
  }


  removeSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }
  clearSessionStorage() {
    sessionStorage.clear();
  }

  //Routing Methods
  navigate(path: string, obj?: object) {
    if (obj) {
      this.router.navigate([path], obj)
    }
    else {
      console.log("ROuter called:", path)
      this.router.navigate([path])
    }
  }

  navigateByUrl(path: string) {
    this.router.navigateByUrl(path)
  }

 


  validateAllFormFields(formGroup: FormGroup) {
    //console.log("Called:", formGroup)
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  // hasError( field: string, error: string ) {
  //   const control = this.signup.get(field);
  //   return control.dirty && control.hasError(error);
  // }


}
