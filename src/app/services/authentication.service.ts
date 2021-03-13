import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(user: any): Observable<UserModel> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<UserModel>(environment.apiUrl  + 'register', user, options);
  }

  login(info: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<any>(environment.apiUrl  + 'login', info, options);
  }

  logout(): Observable<any> {
    const option = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post<any>(environment.apiUrl + 'logout', {}, option);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return token && token.length > 1;
  }
}
