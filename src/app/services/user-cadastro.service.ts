import { UserCadastro } from './../components/login/models/cadastro';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserCadastroService {
  url = 'http://localhost:3000/UsersCadastro';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public getCategorias(): Observable<any> {
    return this.http.get<UserCadastro[]>(this.url);
  }

  saveUsers(user: UserCadastro): Observable<UserCadastro> {
    return this.http
      .post<UserCadastro>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
