import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

export const AuthRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
  }, {
  path: '',
  children: [{
    path: 'login',
    component: LoginComponent
  }]
}];
