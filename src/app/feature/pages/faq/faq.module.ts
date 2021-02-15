import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FAQComponent } from './faq.component';

const routes: Routes = [
  {
      path: '',
      component: FAQComponent,
  }
];

@NgModule({
  declarations: [FAQComponent],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
  ],
  providers: []
})
export class FAQModule { }