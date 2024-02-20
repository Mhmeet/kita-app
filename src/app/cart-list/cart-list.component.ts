import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { BookModel } from '../home-page/home-page.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  cartList: BookModel[] =[];
  constructor(private _BookService: BookService){

  }
  ngOnInit(){
    this.cartList = this._BookService.getCart();
  }
}
