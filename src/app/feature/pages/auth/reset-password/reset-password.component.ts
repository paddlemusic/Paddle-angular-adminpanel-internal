import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  status: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.status = !this.status;
  }

}
