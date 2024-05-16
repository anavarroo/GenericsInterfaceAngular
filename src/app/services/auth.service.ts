import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string = '';

  constructor() { }

  setAuthToken(token: string) {
    this.authToken = token;
    console.log("token guardado:", this.authToken);
    
  }

  getAuthToken(): string {
    console.log("token enviado:", this.authToken);
    return this.authToken;
  }
}
