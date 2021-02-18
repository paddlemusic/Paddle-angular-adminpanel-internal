import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './routing/pages-routing/pages-routing.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ PagesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
