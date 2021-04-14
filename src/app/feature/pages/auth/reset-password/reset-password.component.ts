import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPwdForm: FormGroup;
  mailToken: string;
  status: boolean = true;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private modalService: ModalService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.mailToken = params.token;
        console.log("mailToken", this.mailToken);
        if (this.mailToken) {
          this.buildForm();
        } else {
          this.commonService.navigate('../auth')
        }
      })
  }

  buildForm() {
    this.resetPwdForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', [Validators.required]],
    })
  }
  reset() {
    this.status = !this.status;
  }



  // convenience getter for easy access to form fields
  get f() {
    return this.resetPwdForm.controls;
  }

  onSubmit() {
    if (this.resetPwdForm.invalid) {
      return;
    }
    let url: string = environment.baseUrl + apiUrls.resetPassword;
    // mailToken : this.mailToken

    // const httpOptions = {
    // let headers =  new HttpHeaders({
    //   'MailToken': this.mailToken
    // })
    // };
    let body = {
      email: this.resetPwdForm.get('email')?.value,
      password: this.resetPwdForm.get('new_password')?.value,
    }
    // this.requestService.post(url,body, {},headers).subscribe((res:any)=>{
    //   console.log("Response is:", res);
    //   if(res.status_code == 200){
    //    this.status = true;
    //    this.commonService.navigate('../auth')
    //   }
    console.log("body is:", body)
    this.requestService.sendMail(body, this.mailToken).subscribe((res: any) => {
      console.log("Response is:", res);
      if (res.status_code == 200) {
        this.status = true;
        this.commonService.navigate('../auth')
      }
    }, (err) => {
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
