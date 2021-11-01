import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string

  constructor() {
    this.token = localStorage.getItem("token") || ''
  }

  setToken(newToken: string): void {
    this.token = newToken
    localStorage.setItem("token", this.token)
  }

  public getToken(): string {
    return this.token
  }
}
