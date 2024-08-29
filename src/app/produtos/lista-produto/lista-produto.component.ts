import { CommonModule, registerLocaleData } from '@angular/common';
import { Produto } from '../produto';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt);



@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent  implements OnInit{

  public produtos: Produto[] = [];
symbol: string|boolean|undefined;
  constructor(private produtosService: ProdutosService) { }


  ngOnInit(): void {
    this.produtosService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos)
        },
        error => console.log(error)
      )
  }
}
