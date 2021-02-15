import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './routing/pages-routing/pages-routing.module';
import { LayoutModule } from '@app/shared/layout/layout.module';

@NgModule({
  declarations: [ PagesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
