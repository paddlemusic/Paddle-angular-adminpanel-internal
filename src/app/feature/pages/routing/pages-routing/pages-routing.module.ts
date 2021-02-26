import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './../../pages.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

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
        path: 'notifications',
        loadChildren: () => import('../../../pages/notifications/notifications.module').then(m => m.NotificationsModule),
      },
      {
        path: 'terms-conditions',
        loadChildren: () => import('./../../terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
      },
      {
        path: 'support-request',
        loadChildren: () => import('./../../support-request/support-request.module').then(m => m.SupportRequestModule)
      },
      {
        path: 'order-details',
        loadChildren: () => import('./../../details/details.module').then(m => m.DetailsModule)
      },
      {
        path: 'FAQ',
        loadChildren: () => import('./../../faq/faq.module').then(m => m.FAQModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), LayoutModule, CommonModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
