import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  message: string | undefined;

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.message) {
      this.message = navigation.message;
    }
  }

  showContent(message: string): void {
    this.message = message;
  }
}
