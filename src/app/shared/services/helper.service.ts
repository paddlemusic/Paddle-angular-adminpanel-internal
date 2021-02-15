import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  subject = new Subject();
  behaviourSubject = new BehaviorSubject(null);
  constructor() { }

  getObservable() {
    return this.subject;
  }

  setObservable(d:any) {
    console.log("Next called:", d);
    this.subject.next(d);
  }


  getBehaviourObservable(){
    return this.behaviourSubject;
   }
 
   setBehaviourObservable(obj:any) {
    this.behaviourSubject.next(obj)
   }
 

}
