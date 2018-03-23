import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

//Util
import { API } from '../../util/api.util';

/**
 * A ideia aqui é ter um serviço generico que faz uso da URL backend e provê as chamadas básicas para implementações especificas.
 */
@Injectable()
export class GenericoProvider {

  constructor(protected http: HttpClient) {}

  post(method: string, data: object, query?: {}): Observable<any> {
      const url = API.URL_SISTEMA + method;
      const params: HttpParams = this.toHttpParams(query);
      return this.http.post(url, data, { params });
  }

  put(method: string, data: object): Observable<any> {
      const url = API.URL_SISTEMA + method;
      return this.http.put(url, data);
  }

  delete(method: string): Observable<any> {
      const url = API.URL_SISTEMA + method;
      return this.http.delete(url);
  }

  get(method: string, query?: {}): Observable<any> {
      const url = API.URL_SISTEMA + method;
      const params: HttpParams = this.toHttpParams(query);
      return this.http.get(url, {params});
  }

  /**
   * Convert Object to HttpParams
   * @param {Object} obj
   * @returns {HttpParams}
   */
  toHttpParams(obj: Object): HttpParams {
      if(obj != null) {
        return Object.getOwnPropertyNames(obj).reduce((p, key) => p.set(key, obj[key]), new HttpParams());        
      } else {
        return null;
      }
  }  

}
