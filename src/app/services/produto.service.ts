import { Produto } from './../components/login/models/produto';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url = 'http://45.35.104.152:3000/products/';
  urlApi = 'http://45.35.104.152:3000';

  constructor(private httpClient: HttpClient) {}


  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url);
  }


}
