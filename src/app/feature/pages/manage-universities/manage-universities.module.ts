import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListingComponent } from './university-listing/university-listing.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUniversityComponent } from './add-university/add-university.component';
import { SharedModule } from '@app/shared/shared.module';
import { DetailUniversityComponent } from './detail-university/detail-university.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: UniversityListingComponent
          },
          {
            path: 'edit-university',
            component: EditUniversityComponent
          },
          {
            path: 'add-university',
            component: AddUniversityComponent
          }
      ]
  }
];

@NgModule({
  declarations: [UniversityListingComponent, EditUniversityComponent, AddUniversityComponent, DetailUniversityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule
  ]
})
export class ManageUniversitiesModule { }
