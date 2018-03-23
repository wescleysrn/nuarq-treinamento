import { NgModule } from '@angular/core';
import { ControlMessagesComponent } from './control-messages.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ControlMessagesComponent
    ],
    exports: [
        ControlMessagesComponent
    ]
})
export class DisplayErrorModule {}
