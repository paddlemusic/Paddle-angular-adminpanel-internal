import { Component, OnInit } from '@angular/core';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userProfileData:any={};
  constructor(private requestService : RequestService,
    private modalService : ModalService) { }

  ngOnInit(): void {
  }

    /**
   * Gets user profile
   */
  getUserProfile(){
    let url = environment.baseUrl + apiUrls.userProfile;
    this.requestService.get(url)
      .subscribe((res: any) => {
        if (res.status_code == 200) {
          console.log('REposne is:', res);
         this.userProfileData = res.data;
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
