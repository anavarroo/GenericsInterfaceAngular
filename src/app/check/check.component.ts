import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  message: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const navigation = window.history.state;
    this.message = navigation.message;
  }
}
