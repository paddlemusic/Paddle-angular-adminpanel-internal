import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { CommonService } from '@app/shared/services/common.service';
import { HelperService } from '@app/shared/services/helper.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
   adminProfileForm : FormGroup;
 
  imageFile : any = 'assets/upload.png';
  imageFilePath : string = '';
  constructor(private fb : FormBuilder , 
    private requestService : RequestService,
    private helperService : HelperService,
    private modalService : ModalService,
    private commonService : CommonService) { }


  

  ngOnInit(): void {
    this.buildForm();
    this.customObservable()
  }

  customObservable(){
    this.helperService.getBehaviourObservable().subscribe((res:any)=>{
      if(!res){
          this.getAdminProfile();
      }
      else if(res.type == 'profile'){
         console.log("Res dat:", res.data)
         this.imageFile = res.data.profile_picture
         this.imageFilePath = res.data.profile_picture
        //  this.adminProfileForm.patchValue(res.data)
        this.adminProfileForm.get('name')?.setValue(res.data.name)
      }
    })
  }

    /**
   * Gets user profile
   */
  getAdminProfile(){
    let url = environment.baseUrl + apiUrls.viewAdminProfile;
    this.requestService.get(url)
      .subscribe((res: any) => {
        if (res.status_code == 200) {
          console.log('REposne is:', res);
        //  this.adminProfileData = res.data;
         this.imageFile = res.data.profile_picture
         this.imageFilePath = res.data.profile_picture
        this.adminProfileForm.get('name')?.setValue(res.data.name)
        
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
  

   // convenience getter for easy access to form fields
   get f() {
    return this.adminProfileForm.controls;
  }



  /**
   * Builds form
   */
  buildForm(){
    this.adminProfileForm = this.fb.group({
      name : ['' , Validators.required],
      profile_picture : ['']
    })
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = <File>event.target.files[0];
      const reader = new FileReader();      
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.imageFile = reader.result; 
      }
      const formData = new FormData();
      formData.append('image', file);
      let url :string = environment.baseUrl + apiUrls.uploadFile;
  

      this.requestService.post(url , formData).subscribe((res:any)=>{
        if(res.data){
          this.imageFilePath = res.data.Location;
          // this.commonService.setLocalStorage()
          console.log("File succesfully uploaded")
        }
      },(err)=>{
        console.log("Error is : ", err);
      })
    }
  }

  onSubmit(){

    if(this.adminProfileForm.invalid){
      return;
    }
    let body = {
      name : this.adminProfileForm.get('name')?.value,
      profile_picture : this.imageFilePath
    }
    let url :string = environment.baseUrl + apiUrls.editAdminDetails;
    console.log("value is:", body)
    this.requestService.put(url , body).subscribe((res:any)=>{
      if(res.status_code == 200){
        console.log("updated is:", res);
        this.modalService.showAlert({
          title: 'Success!',
          text: 'Your Profile has been updated',
          icon: 'success',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          timer : 1500
        })
        // this.commonService.navigate('../pages/dashboard')
      }
    },(err)=>{
      console.log("Error is:", err);
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
