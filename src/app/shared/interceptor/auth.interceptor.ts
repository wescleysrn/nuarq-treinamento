import { Injectable } from '@angular/core';
import { HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

/**
 * Este interceptor, fica responsável por:
 * acrescentar o access token no header da requisão, 
 * atualizar o access token chamando refresh token no authorization server, 
 * assim como centraliza o controle de erros do servidor (pode ser utilizado um interceptor próprio para isso), 
 * possibilitando também aplicar uma estratégia de block screen de acordo com um determinado período de tempo.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    protected headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookie.get('access_token')
    };

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('CAIU NO INTERCEPTOR' + JSON.stringify(req));
        if (req.url.indexOf('oauth') <= 0) {
            console.log('Chamada Autenticada');
            req = req.clone({ setHeaders: this.headers });
            return next.handle(req).do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('AuthInterceptor - Request - OK');
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    // tratar erro -- Somente para refresh token, com estrategia de manter último request 
                    // Demais erros serão controlados por interceptor próprio
                    if (err.status === 401) {                        
                        console.log('AuthInterceptor - Request - 401');
                    }

                    /*
                    var timer = Observable.timer(10000);
                    timer.subscribe(t => {
                        console.log('BLOQUEIO DE TELA');
                        //this.turnOffModal();
                    });
                    */

                }
            });
        } else {
            console.log('Chamada não Autenticada');            
            return next.handle(req);
        }
    }

}
