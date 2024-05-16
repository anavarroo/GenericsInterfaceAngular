import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private AuthService: AuthService) { }
  message: string | undefined;
  token: string = '';

  ngOnInit(): void {
    this.token = this.AuthService.getAuthToken();
    if(this.token) {
      console.log(this.token);
    } else {
      console.log("token no recebido");
    }
    
    const navigation = window.history.state;
    if (navigation && navigation.message) {
      this.message = navigation.message;
    }
  }

  showContent(message: string): void {
    this.message = message;
  }
}
