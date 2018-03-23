# ARQUITETURA BÁSICA PARA TREINAMENTO ANGULAR 5 - CONAB-NUARQ 
## DESCRIÇÃO GERAL

<p align="justify">O objetivo deste projeto é servir como started project para o treinamento Angular 5, realizado pelo Núcelo de Arquitetura e Inovação da Conab - Companhia Nacional de Abastecimento, uma empresa pública brasileira vinculada ao Ministerio da Agricultura.</p>
<p align="justify">Com base neste projetos as equipes de desenvolvimento da Conab poderão clonar e iniciar rapidamente um projeto web com tecnologia Angular 5, tendo uma estrutura preparada para realização de autenticação baseada em nosso componente Autorization Server que utiliza tecnologia Oauth2, além de ter a disposição as camadas necessárias para produzir funcionalidades os desenvolvedores terão códigos de exemplos bem comentados para auxiliar no aprendizado durante o treinamento.</p>
<p align="justify">Este projeto faz parte de uma proposta maior idealizada para implantar uma arquitetura corporativa baseada em micro serviços na Companhia, provendo escalabilidade, robustez e principalmente segurança e proteção aos serviços baseado em REST produzidos no ambito corporativo.</p>
 
<p align="center">
  <img src="https://github.com/wescleysrn/mestradounb/blob/master/imagens/treinamento-nuarq/tela_principal.png">
</p>
 
## PROCEDIMENTOS PARA SUA UTILIZAÇÃO

### Baixando e incluindo dependências



### Rodando o projeto

<p align="justify">Uma vez baixado e instalado as dependências, basta executar o comando `ng serve` para rodar o projeto que ficará disponível no contexto `http://localhost:4200/`, assim qualquer alteração realizada no projeto irá refletir automaticamente na visualização no browser.</p>

### Gerando funcionalidades

<p align="justify">Para criação de artefatos pode-se rodar o comando `ng generate component component-name` na pasta onde se quer criar o novo componente, vale lembrar que também é possível gerar outros artefatos bastando informar o tipo, como demonstrado a seguir `ng generate directive|pipe|service|class|guard|interface|enum|module`.</p>
<p align="justify">Trabalhos futuros irão estudar o mecanismo utilizado pelo Angular nessa criação e buscar a criação de componentes archetypes que ficarão no repositório privado da companhia, na tentativa de usar algo como `ng generate conab-crud-padrao vistoria-fiscal`, por exemplo.</p>

### Executando testes

<p align="justify">O desenvolvedor poderá executar casos de testes por meio do comando `ng test`, que irá executar testes unitários via [Karma](https://karma-runner.github.io).</p>
<p align="justify">Para realizar testes fim-a-fim pode-se executar o comando `ng e2e` que irá rodar testes via [Protractor](http://www.protractortest.org/).</p>
<p align="justify">Trabalhos futuros irão produzir e disseminar conhecimento sobre a forma como trabalhar testes nos projetos web na Conab, abordando Karma, Jasmine, Protractor, etc.</p>

### Realizando Deploy



## PRINCIPAIS FUNCIONALIDADES

## CONCLUSÃO

<p align="justify">Este projeto embora facilite o inicio dos trabalhos, deverá ser melhorado e versionado em repositório privado da Companhia, passando por serviços de melhoria do designer, aplicando identidade visual, publicação de artefatos de dependências em nosso servidor CDN, trabalhos de definições de projetos de dependências a serem utilizados, entre outros.</p>
<p align="justify">O Núcleo espera com esse trabalho padronizar os novos projetos na Companhia, nivelar o conhecimento das equipes de desenvolvimento e aprender juntos novos conhecimentos visando a melhoria e qualidade dos produtos de software produzidos na Conab - Companhia Nacional de Abastecimento.</p>
