import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { stringify } from 'querystring';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export class BaseFormComponent {

  public loading = false;  
  //protected loading = false;  ISSO PODE SER PROTECTED ??? - CONFIRA AO RODAR YARN PARA DEPLOY
  
  form: FormGroup;
  private formSumitAttempt: boolean;
  error$: Observable<any>;

  constructor() {}

  onSubmit() {
    this.loading = true;    
    this.form.invalid ?
      Object.keys(this.form.controls).forEach(
        control => this.form.get(control).errors ? this.form.get(control).markAsDirty() : null
      )
      : this.onSave();
  }

  onSave() {
    throw new Error('Metodo não implementado.');
  }

  initForm() {
    throw new Error('Metodo não implementado.');
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
