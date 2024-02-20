import { Component, OnInit, input } from '@angular/core';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksData } from '../books.const';
import { NavbarComponent } from "./navbar/navbar.component";
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';



@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [BookCardListComponent, NavbarComponent,MatIconModule,MatBadgeModule]
})
export class HomePageComponent implements OnInit {
  books: BookModel[] | any = BooksData;
  categories: string[] = [];
  filteredBooks: BookModel | any = BooksData;
  cartList : BookModel[] | any = [];
  constructor(private _router: Router, private _bookService: BookService){
    
  }
  ngOnInit() {
    this.books.forEach((item: BookModel) => {
      if(!this.categories.includes(item.category)){
        this.categories.push(item.category);
      }
    });
    this.cartList = this._bookService.getCart();
  }
  setBookForCategories($event: string) {
    this.filteredBooks = this.books.filter((data: BookModel) => data.category === $event);
  }
  allBook(){
    this.filteredBooks = this.books;
  }
  sepeteGit() {
    this._router.navigateByUrl("/cart");
  }
  addCart(event: BookModel) {
    this.cartList.push(event);
    this._bookService.addCart(this.cartList);
  }

}

export interface BookModel {
  id : string
  name: string
  author: string
  year: string
  image: string
  category: string
  star: string
  

}
