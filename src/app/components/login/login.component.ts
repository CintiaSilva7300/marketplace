import { UsuariosService } from './../../services/usuarios.service';
import { UserCadastroService } from './../../services/user-cadastro.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from './models/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: UserLogin[];
  formulario: any;
  userNotFound!: boolean;
  getLocalhistorage: any;
  itemId: any;
  id: any;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  getUsers() {
    this.usuariosService.getUsuarios().subscribe((users: UserLogin[]) => {
      this.users = users;
    });
  }

  login() {
    this.usuariosService
      .getUserByEmailAndPassword(
        this.formulario.value.email,
        this.formulario.value.password
      )
      .subscribe((data: any) => {
        if (data.length > 0) {
          localStorage.setItem('Localhistorage', JSON.stringify(data));
          this.router.navigate(['/']);
        } else {
          this.userNotFound = true;
        }
      });
    console.log('test', this.formulario.value.email);
  }

  loadData() {
    let data: any = localStorage.getItem('getLocalhistorage');
    this.getLocalhistorage = JSON.parse(data);
    console.log('testee1', this.getLocalhistorage);
  }
}
