import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.scss']
})
export class EditUniversityComponent implements OnInit {

  
  editUniversityForm : FormGroup;
  
  constructor(private fb : FormBuilder,
    private requestService : RequestService,
    private commonService : CommonService,
    private modalService : ModalService) { }

  ngOnInit(): void {
    this.buildForm();
  }

    // convenience getter for easy access to form fields
    get f() {
      return this.editUniversityForm.controls;
    }

  buildForm(){
    this.editUniversityForm = this.fb.group({
      name : ['', [Validators.required]],
      city : ['']
    })
  }

  onSubmit(){
    console.log("Form Values:", this.editUniversityForm.value)
    if (this.editUniversityForm.invalid) {
      return;
    }
    let bodyData = this.editUniversityForm.value;
    let url :string = environment.baseUrl + apiUrls.editUniversity;
    this.requestService.post(url , bodyData).subscribe((res: any) => {
      console.log("response is:", res);
      if (res.data) {
        
        this.commonService.navigate('../pages/university')
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
 


}
