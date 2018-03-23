import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-input-masks',
  templateUrl: './input-masks.component.html',
})
export class InputMasksComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    $('#ex-date').mask('99/99/9999', {
        placeholder: 'dd/mm/yyyy'
    });
    $('#ex-phone').mask('(99) 99999-9999');
    $('#ex-phone2').mask('+55 99 99999-9999');
    $('#ex-ext').mask('(99) 99999-9999');
    $('#ex-credit').mask('****-****-****-****', {
        placeholder: '*'
    });
    $('#ex-tax').mask('99999-99');
    $('#ex-currency').mask('R$ 99.99');
  }

}
