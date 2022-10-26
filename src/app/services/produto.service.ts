import { Produto } from './../components/login/models/produto';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url);
  }

  public getProdutosId(id: string): Observable<any> {
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<Produto[]>(this.url + '/' + id, {
      params: params,
    });
  }

  saveProduto(produto: Produto): Observable<Produto> {
    return this.httpClient
      .post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // utualiza um carro
  updateProduto(produto: Produto) {
    return this.httpClient
      .put<Produto>(
        this.url + '/' + produto.id,
        JSON.stringify(produto),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // // // deleta um carro
  deleteProduto(produto: Produto) {
    return this.httpClient
      .delete<Produto>(this.url + '/' + produto.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
