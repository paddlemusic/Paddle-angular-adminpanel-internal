import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/interceptors/guards/auth.guard';
import { LoginComponent } from './feature/pages/auth/login/login.component';
import { PrivacyPolicyComponent } from './feature/pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './feature/pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/pages/auth/auth.module').then(mod => mod.AuthModule),
    // canActivate: [],
    // canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/pages/auth/auth.module').then(mod => mod.AuthModule),
    // canActivate: [],
  },
  {
    path: 'pages',
    loadChildren: () => import('./feature/pages/pages.module').then(mod => mod.PagesModule),
    // canActivate: [],
    canLoad : [AuthGuard] 
  },
  {
    path : 'terms-of-usage',
    component : TermsAndConditionsComponent
  },
  {
    path : 'privacy-policy',
    component : PrivacyPolicyComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
