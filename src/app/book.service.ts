import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  addCart(book: BookModel[]){
    const payload = JSON.stringify(book);
    localStorage.setItem("cart",payload);
    console.log(localStorage.getItem("cart"));
    
  }

  getCart(){
    const response = localStorage.getItem("cart");
    console.log();
    if(response)
      return JSON.parse(response)
  }

}
