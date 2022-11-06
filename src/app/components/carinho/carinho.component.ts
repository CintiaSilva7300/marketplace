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

  // getStorage() {
  //   let carrinhoStorage = localStorage.getItem('carrinho');

  //   if (carrinhoStorage!.length > 0) {
  //     // alert('tem');
  //     console.log('aquiiiii', carrinhoStorage);
  //   } else {
  //     alert('Algo deu errado no method getStorages!');
  //   }
  // }

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
        console.log('entrou');
        this.produtos = response.filter((item: any) =>
          idProdutoCarrinho.includes(item.id)
        );
        console.log('produtos', this.produtos);
      } else {
        alert('Algo deu errado');
      }
    });
  }

  comprar() {
    alert('Continuar');
    this.router.navigate(['/comprar']);
  }
}
