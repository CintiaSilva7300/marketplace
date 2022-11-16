import { Router } from '@angular/router';
import { UserLogin } from './../login/models/login';
import { UsuariosService } from './../../services/usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from './../login/models/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputPesquisa: string = '';

  users!: UserLogin[];
  produtos!: Produto[];
  formulario: any;
  id: any;
  itemId: any;
  userNotFound!: boolean;

  constructor(
    private produtoService: ProdutoService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.getData();
  }

  ngOnInit(): void {
    this.getProdutos();
    this.getUsuarios();

    this.produtos = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      valor: new FormControl(),
    });
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      // console.log('p', this.produtos);
    });
  }

  getUsuarios() {
    // this.usuariosService.getUsuarios().subscribe((users: UserLogin[]) => {
    //   this.users = users;
    //   console.log('users', this.users);
    // });

    let test: any;
    if (localStorage.length > 0) {
      localStorage.setItem('name', JSON.stringify(this.users));
      console.log('test test', localStorage);
    } else {
      alert('localHistorage esta vazio');
    }
  }

  filtrarProduto() {
    if (this.inputPesquisa.length > 1) {
      //filtrar apartir do segundo digito
      this.produtos = this.produtos.filter((search: any) =>
        search.name.toLowerCase().includes(this.inputPesquisa.toLowerCase())
      );
    } else {
      this.produtoService.getProdutos().subscribe((pro: Produto[]) => {
        this.produtos = pro;
      });
    }
    console.log(this.inputPesquisa);
    console.log(this.inputPesquisa.length);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  saveStorage(item: any) {
    let carrinhoStorage = localStorage.getItem('carrinho');
    this.itemId = item;

    if (carrinhoStorage) {
      carrinhoStorage = carrinhoStorage + ',' + this.itemId;
      localStorage.setItem('carrinho', carrinhoStorage);
      this.router.navigate(['carrinho']);
      console.log('carrinho', this.itemId);
      return;
    } else {
      alert('Algo deu errado no method saveStorage!');
      localStorage.setItem('carrinho', this.itemId);
    }
  }

  getData() {
    let test: any;
    if (localStorage.length > 0) {
      localStorage.setItem('test', JSON.stringify(test));
      return console.log('test test', localStorage);
    } else {
      alert('localHistorage esta vazio');
    }
  }
}
