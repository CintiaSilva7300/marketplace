import { UsuariosService } from './../../services/usuarios.service';
import { UserCadastroService } from './../../services/user-cadastro.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from './models/login';
import { Guid } from 'guid-typescript';
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

  constructor(private usuariosService: UsuariosService, router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
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
          localStorage.setItem('user', JSON.stringify(data[0]));
        } else {
          // this.userNotFound = true
          // console.log('usuario não encontrado');
        }
      });
  }
}
