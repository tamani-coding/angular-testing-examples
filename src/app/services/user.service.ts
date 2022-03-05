import { API_URL } from './../interfaces/constants';
import { UsersResult } from './../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UsersResult> {
    return this.httpClient.get<UsersResult>(API_URL);
  }
}
