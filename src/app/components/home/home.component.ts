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
}
