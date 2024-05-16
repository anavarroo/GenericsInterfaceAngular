import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  constructor(private http: HttpClient) { }

  private jwtSecret = 'lMCvj7Sirkk41OpuXDBKoSA1YeQ4aTeHmP4gzoyoaLk=';

  createUser(newUser: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.post<any>(`http://localhost:8084/api/v1/usuarios/crear`, newUser);
  }

  editUser(user: any, email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.put<any>(`http://localhost:8084/api/v1/usuarios/editar/${email}`, user);
  }

  deleteUser(email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.delete<any>(`http://localhost:8084/api/v1/borrar/editar/${email}`);
  }

  getUser(searchBy: string, searchTerm: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.get<any>(`http://localhost:8084/api/v1/usuarios/${searchBy}/${searchTerm}`);
  }

  checkUser() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });

    return this.http.get<any>(`http://localhost:8084/api/v1/usuarios/pendientes`);
  }

  proveUser(email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.jwtSecret
    });
    
    return this.http.get<any>(`http://localhost:8084/api/v1/usuarios/aprobar/${email}?estado=true`);
  }
}