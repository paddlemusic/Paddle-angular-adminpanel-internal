import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  template: `
  <div *ngIf="shouldShowErrors()">
    <span *ngFor="let error of listOfErrors()" class="errorMsg">
      <i class="fa fa-exclamation-triangle"></i> {{error}}
    </span>
  </div>
`,
  styleUrls: ['./show-error.component.scss']
})
export class ShowErrorComponent {

  constructor() { }


  private static readonly errorMessages:any = {
    'required': () => 'This field is required',
    'minlength': (params : any) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params : any) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params : any) => 'Invalid no.',
    'email': (params : any) => 'Email is not valid',
    'whitespace' : (params:any)=>'Please enter valid data',
    'confirmedValidator': (params : any) => 'New password and confirm password must be match.'
    
    // 'pattern': (params : any) => 'The required pattern is: ' + params.requiredPattern,
    
  };

  @Input()
  public control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): any {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    let error:any = this.control.errors
    return Object.keys(error)
      .map(field => this.getMessage(field, error[field]));
  }
  
  private getMessage(type: string, params: any){
    // console.log("type & params:",type , params);
    return ShowErrorComponent.errorMessages[type](params);
  }

}
