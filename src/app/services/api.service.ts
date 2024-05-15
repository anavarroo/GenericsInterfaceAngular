import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private jwtSecret = 'lMCvj7Sirkk41OpuXDBKoSA1YeQ4aTeHmP4gzoyoaLk=';

  constructor(private http: HttpClient) { }

  authLogin(email: string, password: string, otp: string): Observable<any> {
    const user = {
      correo: email,
      contrasena: password
    };
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.post<any>(`auth/login`, user, { headers });
  }

  authRegister(firstName: string, lastName: string, email: string, password: string, checkAuth: boolean) {
    const newUser = {
      nombre: firstName,
      apellidos: lastName,
      correo: email,
      contrasena: password,
      mfaEnabled: checkAuth
    };

    return this.http.post<any>(`auth/register`, newUser);
  }
}
