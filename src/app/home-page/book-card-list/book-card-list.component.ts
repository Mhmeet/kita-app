import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() books: BookModel[] = [];
  @Output() addToCart = new EventEmitter<BookModel>();
  addBook(book:BookModel) {
    this.addToCart.emit(book);
  }
}
