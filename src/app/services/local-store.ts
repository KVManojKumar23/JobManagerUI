import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStore {

  setUserToken(token: string): void {
    localStorage.setItem('userToken', token);
  }

  getUserToken(): string | null {
    return localStorage.getItem('userToken');
  }

  removeUserToken(): void {
    localStorage.removeItem('userToken');
  }

  // User Info
  setUserName(username: string): void {
    localStorage.setItem('username', username);
  }

  getUserName(): string | null {
    return localStorage.getItem('username');
  }

  removeUserName(): void {
    localStorage.removeItem('username');
  }

  setUserRoles(roles: string[]): void {
    localStorage.setItem('userRoles', JSON.stringify(roles));
  }

  getUserRoles(): string[] | null {
    const roles = localStorage.getItem('userRoles');
    return roles ? JSON.parse(roles) : null;
  }
  
  removeUserRoles(): void {
    localStorage.removeItem('userRoles');
  }
}
