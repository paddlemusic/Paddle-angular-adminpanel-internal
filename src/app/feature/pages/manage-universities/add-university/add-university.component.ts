import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.scss']
})
export class AddUniversityComponent implements OnInit {
  addUniversityForm : FormGroup;
  maximumLimit : boolean = false;
  constructor(private fb : FormBuilder,
    private requestService : RequestService,
    private commonService : CommonService,
    private modalService : ModalService) { }

  ngOnInit(): void {
    this.buildForm();
   
  }

    // convenience getter for easy access to form fields
    get f() {
      return this.addUniversityForm.controls;
    }

    

  buildForm(){
    this.addUniversityForm = this.fb.group({
      name : ['', [Validators.required, this.noWhitespaceValidator]],
      city : ['',[Validators.required,this.noWhitespaceValidator]],
      domain : this.fb.array([this.newDomain()])
    });
  }


  newDomain(): FormControl {
    return new FormControl('', [Validators.required, this.noWhitespaceValidator])
    // this.fb.group({
    //   domain: [''],
    // })
  }
   // Getting form as an array
   get domain():FormArray {
    return this.addUniversityForm.get('domain') as FormArray;
  }

  addDomain() {
    this.maximumLimit = false;
   
      this.domain.push(this.newDomain());
  }

    // Deleting description Form
    deleteDomain(index: number) {
      console.log("INdex is:", index)
   
      this.domain.removeAt(index);
    }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value as string).indexOf(' ') >= 0
    // const isWhitespace = (control.value ).trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

  onSubmit(){
    console.log("Form Values:", this.addUniversityForm.value)
    if (this.addUniversityForm.invalid) {
      return;
    }
    let bodyData = this.addUniversityForm.value;
    let url :string = environment.baseUrl + apiUrls.addUniversity;
    this.requestService.post(url , bodyData).subscribe((res: any) => {
      console.log("response is:", res);
      if (res.data) {
        // let token = res.data.token;
        // this.commonService.setSessionStorage('token', token, false)
        // this.authService.loggedIn.next(true);
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
