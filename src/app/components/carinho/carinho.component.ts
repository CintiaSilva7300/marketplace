import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from './../login/models/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css'],
})
export class CarinhoComponent implements OnInit {
  excluitProdutos: boolean = false;

  produtos!: Produto[];
  itemId: any;
  formulario: any;
  carrinhoLista: any;

  constructor(private produtoService: ProdutoService, private router: Router) {
    this.getData();
  }

  ngOnInit(): void {
    this.produtos = [];
    this.formulario = new FormGroup({
      _id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
    });
  }

  getData() {
    let idProdutoCarrinho: string[] = [];
    const carrinhoLocalStorage = localStorage.getItem('carrinho');

    if (carrinhoLocalStorage) {
      const carrinhoArrayString = carrinhoLocalStorage?.split(',') || [];

      idProdutoCarrinho = carrinhoArrayString.map((itemCarrinho) =>
        (itemCarrinho)
      );
    }

    this.produtoService.getProdutos().subscribe((response: any) => {
      if (response.length > 0) {
        this.produtos = response.filter((item: any) =>
          idProdutoCarrinho.includes(item._id)
        );
      } else {
        alert('Algo deu errado');
      }
    });
  }

  valorTotal(): any {
    var soma = 0;
    for (var i = 0; i < this.produtos.length; i++) {
      soma = soma + this.produtos[i].price;
    }
    return soma;
  }

  comprar() {
    alert('Continuar');
    this.router.navigate(['/comprar']);
  }

  limparCarrinho() {
    localStorage.removeItem('carrinho');
    this.excluitProdutos = true;
  }
}
