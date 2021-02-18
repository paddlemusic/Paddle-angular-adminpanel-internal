import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRequestDetailsComponent } from './support-request-details/support-request-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SupportRequestComponent } from './support-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../shared/components/layout/layout.module';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: SupportRequestComponent
          },
          {
            path: 'support-request-details',
            component: SupportRequestDetailsComponent
          }
      ]
  }
];

@NgModule({
  declarations: [SupportRequestComponent, SupportRequestDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class SupportRequestModule { }
