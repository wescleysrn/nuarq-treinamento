import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';

//Provider Generico
import { GenericoProvider } from '../generico/generico-service';

/**
 * Serviço responsável pela comunicação com o resource server
 */
@Injectable()
export class IbgeRegiaoService {

    private metodo: string = 'api/ibge/regiao/';
    
    constructor(private genericoProvider: GenericoProvider) { }

    //Função para buscar todas as Regiões    
    buscarTodos(): Observable<any> {
        return this.genericoProvider.get(this.metodo);
    }
    
    //Função para buscar as Regiões de forma paginada    
    buscarPaginado(termoPesquisa: string, pagina: number): Observable<any> {
        let params:{} = {'page': pagina + '', 'size': '6', 'nome': termoPesquisa}
        return this.genericoProvider.get(this.metodo, params);
    }

    //Função que retorna uma Regiões pelo ID
    buscarPorId(id: number): Observable<any>  { 
        return this.genericoProvider.get(this.metodo+id);
    }

}