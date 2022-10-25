import { UserCadastro } from './../login/models/cadastro';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  userCadastros!: UserCadastro[];
  formulario: any;

  constructor() {}

  ngOnInit(): void {
    this.userCadastros = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
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
    this.formulario.value.id = Guid.create().toString();
    const userCadastro: UserCadastro = this.formulario.value;
    this.userCadastros.push(userCadastro);
    localStorage.setItem('BDlocalStorage', JSON.stringify(this.userCadastros));
    this.formulario.reset();
  }
}
