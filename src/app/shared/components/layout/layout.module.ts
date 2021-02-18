import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  exports: [SideMenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
