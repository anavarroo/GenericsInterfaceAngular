import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  showContent(page: string): void {

    const mainContent = document.getElementById("formContent");
    let content = "";

    switch (page) {
      case 'create':
        content = `
          <form class="form" id="createUserForm" action="/createUser" method="post">
            <h1>Crear Usuario</h1>
              <div class="input-form">
                <div class="form-group">
                  <label for="firstName">Nombre</label>
                  <input name="firstName" id="firstName" type="text" required>
                </div>
              <div class="form-group">
                <label for="lastName">Apellidos</label>
                <input name="lastName" id="lastName" type="text" required>
              </div>
              <div class="form-group">
                <label for="age">Edad</label>
                <input name="age" id="age" type="number" required>
              </div>
              <div class="form-group">
                <label for="email">Correo</label>
                <input name="email" id="email" type="email" required>
              </div>
              <div class="form-group">
                <label for="address">Direccion</label>
                <input name="address" id="address" type="text" required>
              </div>
              <div class="form-group">
                <label for="mobile">Telefono</label>
                <input name="mobile" id="mobile" type="number" required>
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input name="password" id="password" type="password" required>
              </div>
            </div>
            <button type="submit" class="form-submit-btn">Crear</button>
          </form>
        `;
        break;

      case 'edit':
        content = `
          <form class="form" id="searchForm" action="/getUser" method="post">
            <h1>Editar Usuario</h1>
            <div class="input-form form-edit">
              <div class="form-group">
                <label for="email">Correo del usuario a editar</label>
                <input name="email" id="email" type="email" required>
              </div>
              <div class="form-group">
                <button type="submit" class="form-submit-btn">Buscar</button>
              </div>
            </div>
          </form>
        `;
        break;

      case 'delete':
        content = `
          <form class="form" id="deleteUserForm" action="/deleteUser" method="post">
            <h1>Eliminar Usuario</h1>
            <div class="input-form form-delete">
                <div class="form-group">
                  <label for="email">Correo</label>
                  <input name="email" id="email" type="email" required>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-submit-btn">Eliminar</button>
                </div>
            </div>
          </form>
        `;
        break;

      case 'consult':
        content = `
          <form class="form" id="searchForm" action="/getUser" method="post">
          <h1>Buscar Usuario</h1>
            <div class="input-form">
              <div class="form-group">
                <label for="searchBy">Buscar por:</label>
                <select name="searchBy" id="searchBy" required>
                  <option value="nombre">Nombre</option>
                  <option value="apellidos">Apellidos</option>
                  <option value="edad">edad</option>
                  <option value="correo">Correo</option>
                  <option value="direccion">Direccion</option>
                  <option value="telefono">Telefono</option>
                </select>
              </div>
              <div class="form-group">
                <label for="searchTerm">Término de búsqueda:</label>
                <input name="searchTerm" id="searchTerm" type="text" required>
              </div>
              <div class="form-group">
                <button type="submit" class="form-submit-btn">Buscar</button>
              </div>
            </div>
          </form>
        `;
        break;

      case 'prove':
        content = `
          <h1>Aprobar Usuario</h1>
        `;
        break;
    }

    if (mainContent) {
      mainContent.innerHTML = content;
    }
  }

  showToast(message: string): void {
    // Función showToast omitida por brevedad
  }
}
