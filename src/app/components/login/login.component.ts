import { Component, OnInit } from '@angular/core';
import { UserLogin } from './models/login';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: UserLogin[];
  formulario: any;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl('Cintia'),
      email: new FormControl('cintia@gmail.com'),
      password: new FormControl('123456'),
    });
  }
  login() {
    alert('teste');
  }
}
