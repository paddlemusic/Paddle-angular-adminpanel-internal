import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  fpForm : FormGroup;
  status: boolean = true;

  constructor(private fb : FormBuilder,
    private modalService : ModalService, 
    private requestService : RequestService,
    private commonService : CommonService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  /**
   * Builds form
   */
  buildForm(){
    this.fpForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    })
  }

  /**
   * Sends link
   */
  sendLink() {
    this.status = !this.status;
  }

   // convenience getter for easy access to form fields
   get f() {
    return this.fpForm.controls;
  }



  /**
   * Determines submitting the form
   */
  onSubmit(){
    console.log("Form Values:", this.fpForm.value)
    if (this.fpForm.invalid) {
     return;
   }
   let url:string = environment.baseUrl + apiUrls.forgotPassword
    
   this.requestService.post(url , this.fpForm.value ).subscribe((res:any)=>{
    if(res.status_code == 200){
      console.log("Link sent successfully", res);
      let mailToken = res.mail_token;
      this.commonService.setLocalStorage('mail_token', mailToken, false)

      this.modalService.showAlert({
        title: 'Success!',
        text: 'Please check your email',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        // allowEscapeKey :
        timer: 1500,
       }).then((resp:any)=>{
          this.commonService.navigate('../auth')
        //  if(resp.isConfirmed){
        //   this.commonService.navigate('../auth')
        //  }
       })
    }


   },(error)=>{
     console.log("Error is:", error)
     this.modalService.showAlert({
      title: 'Error!',
      text: error,
      icon: 'error',
      confirmButtonText: 'Ok',
      allowOutsideClick: false
    })
   })

   
   

  }

}
