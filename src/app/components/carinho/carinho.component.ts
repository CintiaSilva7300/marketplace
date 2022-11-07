import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from './../login/models/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css'],
})
export class CarinhoComponent implements OnInit {
  produtos!: Produto[];
  itemId: any;
  formulario: any;
  carrinhoLista: any;
  somaValor: any;

  constructor(private produtoService: ProdutoService, private router: Router) {
    this.getData();
  }

  ngOnInit(): void {
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
    console.log('0 - carrinhoLocalStorage', carrinhoLocalStorage);

    if (carrinhoLocalStorage) {
      const carrinhoArrayString = carrinhoLocalStorage?.split(',') || [];
      console.log('1 - carrinhoArrayString', carrinhoArrayString);

      idProdutoCarrinho = carrinhoArrayString.map((itemCarrinho) =>
        Number(itemCarrinho)
      );
      console.log('2 - idProdutoCarrinho', idProdutoCarrinho);
    }

    this.produtoService.getProdutos().subscribe((response: any) => {
      if (response.length > 0) {
        // console.log('entrou');
        this.produtos = response.filter((item: any) =>
          idProdutoCarrinho.includes(item.id)
        );
        console.log('ProdutoLocalHistorage', this.produtos);
      } else {
        alert('Algo deu errado');
      }
    });
  }

  valorTotal() {
    for (var i = 0; i < this.produtos.length; i++) {
      this.somaValor += this.produtos[i];
    }
    console.log('soma', this.somaValor);

    // const soma = this.produtos
    //   .map((item) => item.valor)
    //   .reduce((prev, curr) => prev + curr);
    // console.log(soma);
  }

  // for (var i = 0; i < this.produtos.length; i++) {
  //   this.somaValor += this.produtos[i].valor;
  //   console.log(this.somaValor);
  // }
  // ------//
  // this.produtos.filter((element) => {
  //   if (element.valor) {
  //     element.valor = ++element.valor;
  //   }
  //   console.log('element', element.valor);
  // });
  // console.log(this.produtos.length);

  //   var numbers = [1,56,78,32,45];

  // var sum = 0;

  // for(var i =0;i<numbers.length;i++){
  //    sum+=numbers[i];
  // }

  // console.log(sum);

  comprar() {
    alert('Continuar');
    this.router.navigate(['/comprar']);
  }
}
