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
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [HeaderComponent, SideMenuComponent,
    // LoaderComponent
  ],
  
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
    // LoaderComponent,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule],
})
export class LayoutModule { }
