import { UserCadastroService } from './../../services/user-cadastro.service';
import { UserCadastro } from './../login/models/cadastro';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  userCadastros!: UserCadastro[];
  formulario: any;
  user: any;

  constructor(private userCadastroService: UserCadastroService) {}

  ngOnInit(): void {
    this.userCadastros = [];
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

  registration(): void {
    this.userCadastroService
      .create(this.formulario.value)
      .subscribe((user: any) => {
        this.user = user;
        this.formulario.reset();
        localStorage.setItem('user', JSON.stringify(user));
      });
  }


}
