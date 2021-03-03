import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
   adminProfileForm : FormGroup;
  constructor(private fb : FormBuilder) { }


  

  ngOnInit(): void {
    this.buildForm();
  }


  /**
   * Builds form
   */
  buildForm(){
    this.adminProfileForm = this.fb.group({
      name : [''],
      image : ['']
    })
  }

  

}
