import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  constructor(private apiService: ApiService, private router: Router) { }

  onLogin(email: string, password: string, otp: string) {    
    this.apiService.authLogin(email, password, otp).subscribe(
      response => {
        if (response && response.authToken) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/check'], { state: { message: 'loginError' } });
        }
      },
      error => {
        if (error && error.response && error.response.status === 500) {
          console.log('Error interno del servidor: ' + error.message);
          this.router.navigate(['/check'], { state: { message: 'serverError' } });
        } else if (error && error.response && error.response.status === 400) {
          console.log('Error interno del cliente: ' + error.message);
          this.router.navigate(['/check'], { state: { message: 'clientError' } });
        } else {
          console.log('Error inesperado: ' + error.message);
          
          this.router.navigate(['/check'], { state: { message: 'error' } });
        }
      }
    );
  }
  

  onRegister(firstName: string, lastName: string, email: string, password: string, checkAuth: boolean) {
    this.apiService.authRegister(firstName, lastName, email, password, checkAuth).subscribe(
      response => {
        if(response) {
          if (checkAuth && response.secret) {
            
          }
        } else {
          this.router.navigate(['/login']);
        }
      },
      error => {
        if (error.response) {
          if (error.response.status === 500) {
            console.log('Error interno del servidor: '+error.message);
            this.router.navigate(['/check'], { state: { message: 'serverError' } });  
          } else if (error.response.status === 400) {
            console.log('Error interno del cliente: '+error.message);
            this.router.navigate(['/check'], { state: { message: 'clientError' } });  
          }
        } else {
          console.log('Error inesperado: '+error.message);
          this.router.navigate(['/check'], { state: { message: 'error' } });  
        }
      }
    );
  }

  // check2Fa(secret: string, otp: string) {
  //   const tokenValidates = speakeasy.totp.verify({
  //     secret: secret,
  //     encoding: 'ascii',
  //     token: otp
  //   });
  //   return tokenValidates;
  // }

  containerActive = false;
  togglePanel(active: boolean) {
    this.containerActive = active;
  }
}
