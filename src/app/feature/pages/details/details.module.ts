import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
      path: '',
      component: DetailsComponent,
  }
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
  ],
  providers: []
})
export class DetailsModule { }
