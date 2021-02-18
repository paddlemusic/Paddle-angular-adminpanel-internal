import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'change-password',
      component: ResetPasswordComponent,
  },

  {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
  },

];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent,ResetPasswordComponent],
  imports: [
    CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
