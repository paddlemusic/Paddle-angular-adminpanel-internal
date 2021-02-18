import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { AuthService } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { ModalService } from '@app/shared/services/modal.service';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean = true;
  userProfileData: any;

  constructor(
    private commonService:CommonService, 
    private authService : AuthService,
    private modalService : ModalService,
    private requestService : RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }


  toggleDropdownMenu() {
    this.status = !this.status;
  }

  /**
   * Signs out
   */
  signOut() {
  this.authService.logout().subscribe((res:any)=>{
    if(res.status_code == 200){
      this.authService.loggedIn.next(false);
      this.commonService.clearLocalStorage();
      this.commonService.clearSessionStorage();
      this.commonService.navigate('../auth');
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
    });
  }

  routeToReset() {
    this.router.navigate(['../auth/change-password']);
  }

}
