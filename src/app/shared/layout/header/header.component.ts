import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleDropdownMenu() {
    this.status = !this.status;
  }

  signOut() {
    this.router.navigate(['../auth']);
  }

  routeToReset() {
    this.router.navigate(['../auth/reset-password']);
  }

}
