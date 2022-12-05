import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  aparecer: boolean = false;
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  aparecerMenu() {
    this.aparecer = !this.aparecer;
  }

  getUsuarios() {
    const user = localStorage.getItem('user');
    let test: any;
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
