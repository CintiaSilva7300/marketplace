import { Router } from '@angular/router';
import { UserLogin } from './../login/models/login';
import { UsuariosService } from './../../services/usuarios.service';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from './../login/models/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';

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

  constructor(
    private produtoService: ProdutoService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProdutos();

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
}
