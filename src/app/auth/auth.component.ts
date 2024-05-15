import { Component, inject } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private endpointService = inject(EndpointsService);

  containerActive = false;
  togglePanel(active: boolean) {
    this.containerActive = active;
  }
}
