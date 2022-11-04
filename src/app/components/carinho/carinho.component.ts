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

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.produtos = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      valor: new FormControl(),
    });
  }

  getStorage() {
    let carrinhoStorage = localStorage.getItem('carrinho');

    if (carrinhoStorage!.length > 0) {
      // alert('tem');
      console.log('aquiiiii', carrinhoStorage);
    } else {
      alert('Algo deu errado no method getStorages!');
    }
  }

  getData(item: any) {
    this.itemId = item;
    this.produtoService
      .getProdutosId(this.formulario)
      .subscribe((response: any) => {
        if (response.length > 0) {
          localStorage.setItem(
            'produtos',
            JSON.stringify(response[this.itemId])
          );
        } else {
          alert('Algo deu errado');
        }
        console.log('historage arr', this.itemId);
      });
  }

  comprar() {
    alert('Continuar');
    this.router.navigate(['/comprar']);
  }
}
