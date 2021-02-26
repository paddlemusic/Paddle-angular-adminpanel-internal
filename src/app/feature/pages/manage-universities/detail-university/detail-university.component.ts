import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-detail-university',
  templateUrl: './detail-university.component.html',
  styleUrls: ['./detail-university.component.scss']
})
export class DetailUniversityComponent implements OnInit {

  constructor(private requestService : RequestService,
    private route: ActivatedRoute,
    private modalService : ModalService) { }

  ngOnInit(): void {
  //   this.route.queryParams
  //   .subscribe(params => {
  //     this.universityId = params.id;
  //     console.log("User id:", this.universityId);

  //   this.getUniversityProfile();
  // })
  }

  // getUserProfile(){
  //   let url = environment.baseUrl + apiUrls.viewUserProfile + '/' + this.userId;
  //   this.requestService.get(url)
  //     .subscribe((res: any) => {
  //       if (res.status_code == 200) {
  //         console.log('REposne is:', res);
  //        this.userProfileData = res.data;
  //       } 
  
  //     }, (err) => {
  //       console.log("Error is:", err);
  //       this.modalService.showAlert({
  //         title: 'Error!',
  //         text: err,
  //         icon: 'error',
  //         confirmButtonText: 'Ok',
  //         allowOutsideClick: false
  //       })
  //     });
  // }
  

}
