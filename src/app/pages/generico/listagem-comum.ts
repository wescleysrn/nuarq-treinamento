export class PaginaListagemComum {

    constructor() {}

    //Variáveis da página
    
    indice: number = 0;
    indicePagina: number = 0;
    termoPesquisa: string = '';
    filtroHabilitado: boolean = false;
    filtroAplicado: boolean = false;
    
    //Função que avalia se o filtro está habilitado 
    
    isLocalizacaoHabilitado() {
        return this.filtroHabilitado;
    }

    //Função para habilitar a localização de registros 
    
    habilitarLocalizacao(valor: boolean) {
        this.filtroHabilitado = valor;
    }

}
