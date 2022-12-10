import { UserLogin } from './../components/login/models/login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'http://localhost:3000/UsersCadastro';
  urlApi = 'http://45.35.104.152:3000';

  constructor(private httpClient: HttpClient) {}
  users!: any[];

  getUsuarios(): Observable<UserLogin[]> {
    return this.httpClient.get<UserLogin[]>(this.url);
  }

  getUsuariosId(id: any): Observable<any> {
    new HttpParams().set('id', id);
    return this.httpClient.get<UserLogin[]>(this.url);
  }

  // getUserByEmailAndPassword(email: any, password: any): any {
  //   return this.httpClient.get<any>(
  //     this.url + '?email=' + email + '&password=' + password
  //   );
  // }

  login(email: any, password: any): any {
    const data = {email, password}
    return this.httpClient.post<any>(
      this.urlApi + '/users/login', data
    );
  }
}
