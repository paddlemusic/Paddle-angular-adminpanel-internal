import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/interceptors/core.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptors';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './shared/components/layout/layout.module';
import { LoaderComponent } from './shared/components/layout/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [   {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
     }],
  bootstrap: [AppComponent]
})
export class AppModule { }
