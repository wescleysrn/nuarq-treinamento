import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';

//Provider Generico
import { GenericoProvider } from '../generico/generico-service';

/**
 * Serviço responsável pela comunicação com o resource server
 */
@Injectable()
export class PessoaService {

    private metodo: string = 'api/pessoafisica/';
    
    constructor(private genericoProvider: GenericoProvider) { }

    //Função para buscar todas as Pessoas    
    buscarTodos(): Observable<any> {
        return this.genericoProvider.get(this.metodo);
    }
    
    //Função para buscar as Pessoas de forma paginada    
    buscarPaginado(termoPesquisa: string, pagina: number): Observable<any> {
        let params:{} = {'page': pagina + '', 'size': '50', 'nome': termoPesquisa}
        return this.genericoProvider.get(this.metodo, params);
    }

    //Função que retorna uma Pessoas pelo ID
    buscarPorId(id: number): Observable<any>  { 
        return this.genericoProvider.get(this.metodo+id);
    }

    //Função para salvar um novo registro de Pessoa
    salvar(form: FormGroup): Observable<any>  { 
        return this.genericoProvider.post(this.metodo, form.value); 
    }

    //Função que remove registro pelo ID
    deletar(id: number): Observable<any>  { 
        return this.genericoProvider.delete(this.metodo+id);
    }

}