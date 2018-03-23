import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Cookie } from 'ng2-cookies';
import { Subscription } from 'rxjs/Subscription';

// Login - Components
import { BaseFormComponent } from '../../../components/base-form/base-form.component';
import { ValidationService } from '../../../components/display-error/validation.service';
// Login - Providers
import { AuthProvider } from '../../../shared/providers/auth/auth.provider';
// Login - Model
import { UserOauthModel } from '../../../shared/model/user/user-oauth.model';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthProvider,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
      this.form = this.fb.group({
        login: ['', [Validators.required, Validators.minLength(8) ]], // ValidationService.emailValidator
        password: ['', [Validators.required, Validators.minLength(3)]]
      });
  }

  onSave() {
      if (this.form.dirty && this.form.valid) {
        this.authService.login(new UserOauthModel(this.form.value.login, this.form.value.password)).subscribe((response) => {
          // this.events.publish('user:signin', {menu: response.menu});
          console.log('Oauth2 ' + JSON.stringify(response));
          const expireDate = new Date().getTime() + (1000 * response.expires_in);
          Cookie.set('access_token', response.access_token, expireDate);
          this.loading = false;
          this.router.navigate(['/']);
        });
      }
  }

}
