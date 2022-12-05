import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;
  aparecer: boolean = false;

  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.getUsuarios();
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

  aparecerMenu() {
    this.aparecer = !this.aparecer;
  }


}
