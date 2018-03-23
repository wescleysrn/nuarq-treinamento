import { Component, Input,  OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-excluir',
    templateUrl: './modal-excluir.component.html'
})
export class ModalExcluirComponent implements OnInit {
    @Input() registro;
    
    constructor(public activeModal: NgbActiveModal) { 

    }
    
    // Função de inicialização    
    ngOnInit() {

    }
        
}
