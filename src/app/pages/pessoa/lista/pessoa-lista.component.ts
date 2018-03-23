import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Generico - Pessoa
import { PaginaListagemComum } from '../../generico/listagem-comum';
// Serviços - Pessoa
import { PessoaService } from '../../../shared/providers/pessoa/pessoa-service';
// Model - Pessoa
import { PessoaPaginaModel } from "../../../shared/model/pessoa/pessoa-pagina.model";
// Components - CategoriaEquipamento - Modal
import { ModalExcluirComponent } from '../../../components/form/modal/modal-excluir.component';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.scss']
})
export class PessoaListaComponent extends PaginaListagemComum implements OnInit {

    //Declaração de variáveis
    public loading = false; 
    public localizarSelected: any;

    // Declaração de model    
    pagina: PessoaPaginaModel = new PessoaPaginaModel();
  
    // Função construtor
    constructor(private service: PessoaService,
                private router: Router,
                private modalService: NgbModal) {
      super();
      this.indice = 0;
      this.indicePagina = 0;         
    }

    // Função de inicialização - Carrega lista de categorias de equipamento
    ngOnInit() {
      this.buscarPaginado();
    }

    //Função que recupera lista de categorias de equipamento de forma paginada.    
    buscarPaginado() {
        this.loading = true;        
        this.service.buscarPaginado(this.termoPesquisa, this.indicePagina).subscribe(
            response => { 
                if(<PessoaPaginaModel>response != null) {
                    this.pagina = <PessoaPaginaModel>response;    
                    console.log('PESSOAS ' + JSON.stringify(this.pagina));                
                }
                this.loading = false;
            },
            error => { 
                this.loading = false;
                // Vai pro Interceptor
                console.log("Error");
            }
        );
    }    

    navegar(indice) {
        this.indicePagina = indice;
        this.buscarPaginado();
    }
    
    editar(id) {
        this.router.navigate(['/pessoa/formulario/', {id: id}]); 
    }
    
    excluir(id) {
        const modalRef = this.modalService.open(ModalExcluirComponent);
        modalRef.componentInstance.registro = 'pessoa';
        modalRef.result.then(res => 
            {
                if(res == true) {
                    this.loading = true;        
                    this.service.deletar(id).subscribe(
                        response => { 
                            this.indice = 0;
                            this.indicePagina = 0;         
                            this.loading = false;
                            this.buscarPaginado();
                        },
                        error => { 
                            this.loading = false;
                            // Vai pro Interceptor
                            console.log("Error");
                        }                                    
                    );
                }    
            }
        )
    }    

}
