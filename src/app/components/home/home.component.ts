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

  produtos!: Produto[];
  formulario: any;
  id: any;

  constructor(private produtoService: ProdutoService) {}

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
      console.log('p', this.produtos);
    });
  }

  saveStorage(id: any): void {
    this.produtoService.getProdutosId(id).subscribe((data) => {
      this.produtos = data;
      console.log('test', data);
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
}
