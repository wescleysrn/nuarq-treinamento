import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

/**
 * A ideia do guardião é para possibilitar um controle de acesso as rotas de acordo com o perfil do usuário, 
 * seja de acesso ou de execução de uma operação especifica.
 */
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

      // Para o treinamento está somente verificando se há um access token no navegador.
      // Deve na verdade verificar no servidor se o access token existente é legitimo, 
      // assim como se os grant's do perfil do usuário permitem acesso a rota desejada.

      if (!Cookie.check('access_token')) {
        this.router.navigate(['/auth']);
        return false;
      } else {
        return true;
      }
    }

}
