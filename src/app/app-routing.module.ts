import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/interceptors/guards/auth.guard';
import { LoginComponent } from './feature/pages/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/pages/auth/auth.module').then(mod => mod.AuthModule),
    // canActivate: [],
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/pages/auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [],
  },
  {
    path: 'pages',
    loadChildren: () => import('./feature/pages/pages.module').then(mod => mod.PagesModule),
    // canActivate: [],
    canLoad : [AuthGuard] 
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
