import { Injectable } from '@angular/core';
import { LocalStore } from '../../services/local-store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export interface loginResponse {
  token: string;
  username: string;
  roles: Set<string>;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private localStore: LocalStore, private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<loginResponse> {
    const payLoad = {
      username: username,
      password: password,
    };
    return this.httpClient.post<loginResponse>(`${environment.API_URL}/auth/login`, payLoad);
  }

  setUserToken(token: string): void {
    this.localStore.setUserToken(token);
  }
  
  getUserToken(): string | null {
    return this.localStore.getUserToken();
  }

  setUserRole(roles: Set<string>): void {
    this.localStore.setUserRoles(Array.from(roles));
  }
  
  getUserRole(): Set<string> | null {
    const userRoles = this.localStore.getUserRoles();
    return userRoles ? new Set(userRoles) : null;
  }

  setUsername(username: string): void {
    this.localStore.setUserName(username);
  }
  
  getUsername(): string | null {
    return this.localStore.getUserName();
  }

  logout(): void {
    this.localStore.removeUserToken();
    this.localStore.removeUserRoles();
    this.localStore.removeUserName();
  }
}
