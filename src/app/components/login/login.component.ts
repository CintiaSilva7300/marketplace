import { UsuariosService } from './../../services/usuarios.service';
import { UserCadastroService } from './../../services/user-cadastro.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from './models/login';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: UserLogin[];
  formulario: any;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  login() {
    this.usuariosService == this.formulario;
    this.formulario;
    console.log(this.formulario);
  }
}
