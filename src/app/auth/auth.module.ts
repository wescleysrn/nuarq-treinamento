import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';

// Auth - Pages
import { LoginComponent } from './pages/login/login.component';

// Auth - Components BaseForm e Display Error
import { DisplayErrorModule } from '../components/display-error/display-error.module';
import { BaseFormComponentModule } from '../components/base-form/base-form.module';

// Auth - Providers
import { AuthProvider } from '../shared/providers/auth/auth.provider';

// Auth - Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptor/auth.interceptor';

import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BaseFormComponentModule,
    DisplayErrorModule,
    LoadingModule,
    HttpClientModule,
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }    
  ]
})
export class AuthModule {}
