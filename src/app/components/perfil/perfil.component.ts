import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;

  constructor() { }

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
}
