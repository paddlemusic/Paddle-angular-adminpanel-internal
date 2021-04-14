import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  // domainArr:string[] =[];
  editUniversityForm : FormGroup;
  universityId:string;
  constructor(private fb : FormBuilder,
    private requestService : RequestService,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private modalService : ModalService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.universityId = params.id;
      console.log("Uni id:", this.universityId);

    this.getUniversity();
  })
    this.buildForm();
  }

  /**
   * Gets university
   */
  getUniversity(){
    let url:string = environment.baseUrl + apiUrls.getUniversity + '/' + this.universityId;
    this.requestService.get(url).subscribe((res:any)=>{
      if(res.status_code == 200){
        
        this.editUniversityForm.patchValue(res.data);
        this.setFormValues(res.data)
      }
    })
  }

  setFormValues(resData:any){

    if (resData.domain && resData.domain.length > 0) {
    resData.domain.forEach((item:any)=>{
      const form = this.newDomain();
        form.patchValue(item);
      this.domain.push(form);
    })
  } else {
      const form = this.newDomain();
      this.domain.push(form);
    }
    // let domainArr:string[] =[];

    //      domainArr = resData.domain;
    // console.log('Set values are:', domainArr);
    // if (domainArr && domainArr.length > 0) {
    //   for (let i = 0; i < domainArr.length; i++) {
    //     console.log('TTTTTTTTTTTTTTTTT:', domainArr[i]);
    //     const form = this.newDomain();
    //     form.patchValue(domainArr[i]);
    //     this.domain.push(form);
    //   }
    // } else {
    //   const form = this.newDomain();
    //   this.domain.push(form);
    // }
  }


    // convenience getter for easy access to form fields
    get f() {
      return this.editUniversityForm.controls;
    }

  buildForm(){
    this.editUniversityForm = this.fb.group({
      name : ['', [Validators.required, this.noWhitespaceValidator]],
      city : ['',[Validators.required,this.noWhitespaceValidator]],
      domain : this.fb.array([])
    })
  }
  newDomain(): FormControl {
    return new FormControl('', [Validators.required, this.noWhitespaceValidator])
    // this.fb.group({
    //   domain: [''],
    // })
  }
   // Getting form as an array
   get domain():FormArray {
    return this.editUniversityForm.get('domain') as FormArray;
  }

  addDomain() {
    this.domain.push(this.newDomain());
  }

    // Deleting description Form
    deleteDomain(index: number) {
      this.domain.removeAt(index);
    }

    public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value as string).charAt(0) === ' '

      // const isWhitespace = (control.value as string).indexOf(' ') >= 0
      // const isWhitespace = (control.value ).trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }
  onSubmit(){
    console.log("Form Values:", this.editUniversityForm.value)
    if (this.editUniversityForm.invalid) {
      return;
    }
    let bodyData = this.editUniversityForm.value;
    let url :string = environment.baseUrl + apiUrls.editUniversity + '/' + this.universityId;
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
