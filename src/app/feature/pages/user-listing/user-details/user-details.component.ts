import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  userId : any;
  constructor(private requestService : RequestService,
    private route: ActivatedRoute,
    private modalService : ModalService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.userId = params.id;
      console.log("User id:", this.userId);

    this.getUserProfile();
  })
}

    /**
   * Gets user profile
   */
  getUserProfile(){
    let url = environment.baseUrl + apiUrls.viewUserProfile + '/' + this.userId;
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
