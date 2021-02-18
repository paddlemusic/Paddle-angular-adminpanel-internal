import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';

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
    private commonService : CommonService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  /**
   * Builds form
   */
  buildForm(){
    this.fpForm = this.fb.group({
      email : ['', [Validators.required]]
    })
  }

  /**
   * Sends link
   */
  sendLink() {
    this.status = !this.status;
  }


  /**
   * Determines submitting the form
   */
  onSubmit(){
    console.log("Form Values:", this.fpForm.value)
    if (this.fpForm.invalid) {
     return;
   }
   this.modalService.showAlert({
    title: 'Success!',
    text: 'Saved SuccessFully',
    icon: 'success',
    confirmButtonText: 'Ok',
    allowOutsideClick: false
  })
    let bodyData = this.fpForm.valid;
    // this.sendLink();
      // this.commonService.navigate('../pages/dashboard')

  }

}
