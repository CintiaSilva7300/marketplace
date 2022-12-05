import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any | undefined;
  mostrarItem: boolean = true;
  formulario: any;

  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.getUsuarios();

    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      genre: new FormControl(),
      birthday: new FormControl(),
      cpf: new FormControl(),
      telephone: new FormControl(),
    });
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

  aparecerItem() {
    this.mostrarItem = !this.mostrarItem;
  }

}
