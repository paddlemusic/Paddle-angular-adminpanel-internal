import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './../../pages.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { EditProfileComponent } from '../../admin-profile/edit-profile/edit-profile.component';
import { SongListingComponent } from '../../manage-songs/song-listing/song-listing.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'user',
        loadChildren: () => import('../../../pages/user-listing/user-listing.module').then(m => m.UserListingModule),
      },
      {
        path: 'university',
        loadChildren: () => import('../../../pages/manage-universities/manage-universities.module').then(m => m.ManageUniversitiesModule),
      },
      {
        path : 'edit-admin-profile',
        component : EditProfileComponent
      },
      {
        path : 'songs',
        component : SongListingComponent
      }
    ]
  },
 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), LayoutModule, CommonModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
