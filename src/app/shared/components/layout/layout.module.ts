import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [SideMenuComponent, HeaderComponent,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule],
})
export class LayoutModule { }
