import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  async authLogin(user: any) {
    try {
      const response = await axios.post(`http://api-gateway:8084/auth/login`, user);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async authRegister(newUser: any) {
    try {
      const response = await axios.post(`http://api-gateway:8084/auth/register`, newUser);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }
}
