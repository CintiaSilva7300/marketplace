import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from './../login/models/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputPesquisa: string = '';

  produtos!: Produto[];
  user: any;
  formulario: any;
  id: any;
  itemId: any;

  aparecer: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.getProdutos();
    this.getUsuarios();

    this.produtos = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
    });
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  getUsuarios() {
    const user = localStorage.getItem('user');
    // let test: any;
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  filtrarProduto() {
    if (this.inputPesquisa.length > 1) {
      this.produtos = this.produtos.filter((search: any) =>
        search.name.toLowerCase().includes(this.inputPesquisa.toLowerCase())
      );
    } else {
      this.produtoService.getProdutos().subscribe((pro: Produto[]) => {
        this.produtos = pro;
      });
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  saveStorage(item: any) {
    let carrinhoStorage = localStorage.getItem('carrinho');
    this.itemId = item;

    if (carrinhoStorage) {
      carrinhoStorage = carrinhoStorage + ',' + this.itemId;
      localStorage.setItem('carrinho', carrinhoStorage);
      this.router.navigate(['carrinho']);
      return;
    } else {
      // alert('Algo deu errado no method saveStorage!');
      localStorage.setItem('carrinho', this.itemId);
    }
  }

  aparecerMenu() {
    this.aparecer = !this.aparecer;
  }
}
