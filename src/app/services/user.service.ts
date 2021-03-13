import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: UserModel;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.isLogged() && !this.currentUser) {
      this.getUserById().subscribe(user => {
        this.currentUser = user;
      }, (error) => {
        if (error.status === 401) {
          localStorage.clear();
        }
      });
    }
  }

  getUserById(): Observable<UserModel> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.get<UserModel>(environment.apiUrl + 'user', options);
  }

  getRanks(): Observable<UserModel[]> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<UserModel[]>(environment.apiUrl + 'ranks', options);
  }


  updateScore(score: number, opponentScore: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post<any>(environment.apiUrl + 'update/score', {score, opponentScore}, options);
  }

  updateAvatar(avatar: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.post<any>(environment.apiUrl + 'update/avatar', {avatar}, options);
  }
}
