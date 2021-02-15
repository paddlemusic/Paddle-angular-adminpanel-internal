import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './user-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './../../../shared/layout/layout.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: UserListingComponent
          },
          {
            path: 'edit-user',
            component: EditUserComponent
          },
          {
            path: 'user-details',
            component: UserDetailsComponent
          }
      ]
  }
];

@NgModule({
  declarations: [UserListingComponent, EditUserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class UserListingModule { }
