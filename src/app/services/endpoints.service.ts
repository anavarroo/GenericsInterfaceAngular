import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  async createUser(newUser: any) {
    try {
      const response = await axios.post(`http://localhost:8084/api/v1/usuarios/crear`, newUser);
      const response = await axios.post(`http://api-gateway:8082/api/v1/usuarios/crear`, newUser);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async editUser(user: any, email: string) {
    try {
      const response = await axios.put(`http://localhost:8084/api/v1/usuarios/editar/${email}`, user);
      const response = await axios.put(`http://api-gateway:8082/api/v1/usuarios/editar/${email}`, user);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async deleteUser(email: string) {
    try {
      const response = await axios.delete(`http://localhost:8084/api/v1/borrar/editar/${email}`);
      const response = await axios.delete(`http://api-gateway:8082/api/v1/borrar/editar/${email}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async getUser(searchBy: string, searchTerm: string) {
    try {
      const response = await axios.get(`http://localhost:8084/api/v1/usuarios/${searchBy}/${searchTerm}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async checkUser() {
    try {
      const response = await axios.get(`http://localhost:8084/api/v1/usuarios/pendientes`);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }

  async proveUser(email: string) {
    try {
      const response = await axios.get(`http://localhost:8084/api/v1/usuarios/aprobar/${email}?estado=true`);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar user');
    }
  }
}