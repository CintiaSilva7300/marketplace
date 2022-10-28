import { UserLogin } from './../components/login/models/login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsuarios(): Observable<UserLogin[]> {
    return this.httpClient.get<UserLogin[]>(this.url);
  }

  getUsuariosId(id: any): Observable<any> {
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<UserLogin[]>(this.url + '' + id, {
      params: params,
    });
  }
}
