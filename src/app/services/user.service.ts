import { UsersResult } from './../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UsersResult> {
    return this.httpClient.get<UsersResult>(this.apiUrl);
  }
}
