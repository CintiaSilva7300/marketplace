import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'marketplace';
}

let exibirAlerta = false;
const titulo = 'marketplace';
const notificacoes = 'marketplace';

const alterarTitulo = setInterval(() => {
  document.title = exibirAlerta ? titulo : notificacoes;
  exibirAlerta = !exibirAlerta;
}, 800);
