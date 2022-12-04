import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../login/models/produto';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent implements OnInit {
  produtos!: Produto[];
  formulario: any;

  constructor(private produtoService: ProdutoService) {
    this.getData();
  }

  ngOnInit(): void {
    this.valorTotal();
    this.produtos = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      valor: new FormControl(),
    });
  }

  getData() {
    let idProdutoCarrinho: number[] = [];
    const carrinhoLocalStorage = localStorage.getItem('carrinho');

    if (carrinhoLocalStorage) {
      const carrinhoArrayString = carrinhoLocalStorage?.split(',') || [];

      idProdutoCarrinho = carrinhoArrayString.map((itemCarrinho) =>
        Number(itemCarrinho)
      );
    }

    this.produtoService.getProdutos().subscribe((response: any) => {
      if (response.length > 0) {
        this.produtos = response.filter((item: any) =>
          idProdutoCarrinho.includes(item.id)
        );
      } else {
        alert('Algo deu errado');
      }
    });
  }

  valorTotal(): any {
    var soma = 0;
    for (var i = 0; i < this.produtos.length; i++) {
      soma = soma + this.produtos[i].valor;
    }
    return soma;
  }
}
