import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: ModalService,
    private commonService: CommonService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log("Form Values:", this.loginForm.value)
    if (this.loginForm.invalid) {
      return;
    }
    let bodyData = this.loginForm.value;
    this.authService.login(bodyData).subscribe((res: any) => {
      console.log("response is:", res);


      if (res.data) {
        let token = res.data.token;
        this.commonService.setLocalStorage('token', token, false)
        this.authService.loggedIn.next(true);
        this.commonService.navigate('../pages/dashboard')
      } 
    }, (err) => {
      console.log("Error is:", err);
      this.modalService.showAlert({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      })
    });

  }

  navigate(){
    const extras = {
      queryParams: { 
        token: 'kjfsdjgbfsdhbghbhdsbghdhs' 
      } 
  }
  this.commonService.navigate('../auth/reset-password', extras)
  }

}
