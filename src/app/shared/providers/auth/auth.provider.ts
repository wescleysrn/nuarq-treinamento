import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// Models
import { UserOauthModel } from '../../model/user/user-oauth.model';
// Util
import { API } from '../../util/api.util';

@Injectable()
export class AuthProvider {

    constructor(
        private http: HttpClient
        ) {}

    /**
     * Function utilizada para realizar login no app
     * @param user
     */
    login(user: UserOauthModel): Observable<any> {
        return Observable.create((observer) => {
            const params: HttpParams = this.serialize(user);
            const headers = new HttpHeaders()
                            .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
                            .set('Authorization', 'Basic ' + btoa(API.ID_APP + ':' + API.SENHA_APP));        
            this.http.post(API.URL_ACESSO + 'oauth/token', params, {headers}).subscribe((response) => {
                observer.next(response);
            }, (error) => {
                observer.error(error._body);
            });                          
        });
    }

    /**
     * Function que serializa o elemento do formulário para que ele possa ser passado para o servidor pela url.
     * As propriedades dos objetos são as chaves e os valores dos objetos são os valores.
     * ex: { "a":1, "b":2, "c":3 } se transforma em ?a=1&b=2&c=3
     * @ param  {SystemSetup} obj - Os campos de formulário para ser codificado em url
     * @ returns URLSearchParams - O url codificado
     */
    serialize(params) {
        return Object.getOwnPropertyNames(params)
                     .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

}
