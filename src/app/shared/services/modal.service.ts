import { Injectable } from '@angular/core';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }


  
  showPopup(id:string) {
    // console.log("Id is",id)
    $('#' + id).modal('show');
}

closePopup(id: string) {
  // $('#' + id).modal({ keyboard: false }) 
  $('#' + id).modal('hide');
}
}
