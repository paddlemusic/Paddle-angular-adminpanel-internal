import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePwdForm : FormGroup;
  status: boolean = true;


  constructor(private fb : FormBuilder,
    private requestService : RequestService,
    private modalService : ModalService,
    private commonService : CommonService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.changePwdForm = this.fb.group({
      old_password :['', [Validators.required]],
      new_password :['', [Validators.required]],
      confirm_password :['', [Validators.required]],
    }, { validators: this.checkPasswords('new_password','confirm_password' ) })
  }
  reset() {
    this.status = !this.status;
  }


  checkPasswords(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
    // convenience getter for easy access to form fields
    get f() {
      return this.changePwdForm.controls;
    }

  onSubmit(){
    if(this.changePwdForm.invalid){
      return;
    }
    let url: string = environment.baseUrl + apiUrls.changePassword;
     let body = {
       old_password : this.changePwdForm.get('old_password')?.value,
       new_password : this.changePwdForm.get('new_password')?.value,
     }
    this.requestService.post(url,body ).subscribe((res:any)=>{
      console.log("Response is:", res);
      if(res.status_code == 200){
       this.status = true;
       this.commonService.navigate('../auth')
      }
    },(err)=>{
      this.modalService.showAlert({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      })
    })
  }

}
