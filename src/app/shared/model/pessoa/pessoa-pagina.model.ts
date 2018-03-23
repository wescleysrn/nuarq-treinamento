import { PessoaModel } from './pessoa.model';
import { PaginaModel } from '../pagina/pagina.model';

export class PessoaPaginaModel extends PaginaModel {

    content: PessoaModel[] = [];

}
