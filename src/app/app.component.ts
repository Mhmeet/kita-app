import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksData } from './books.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  books = BooksData
  ngOnInit() {
      
    console.log(this.books)
  }
}
