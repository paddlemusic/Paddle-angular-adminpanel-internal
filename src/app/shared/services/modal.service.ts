import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
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

/**
 * Shows alert
 * @param title 
 * @param text 
 * @returns  
 */
showAlert(obj:any){
  return Swal.fire(obj)

 

}


}
