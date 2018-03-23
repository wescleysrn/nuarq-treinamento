import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-control-messages',
  template: `<div *ngIf="errorMessage !== null">
                <span class="glyphicon glyphicon-remove form-control-feedback fix-error-icon"></span>
                <p style="color: #da6161; font-weight: bold; font-size: small;">{{errorMessage}}</p>
             </div>`
})
export class ControlMessagesComponent {

    @Input() control: FormControl;

    constructor() { }

    get errorMessage() {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
      return null;
    }

}
