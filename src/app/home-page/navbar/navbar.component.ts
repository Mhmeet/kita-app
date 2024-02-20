import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() categories: string[] = [];
  @Output() categoryName = new EventEmitter<string>();
  @Output() allCategory = new EventEmitter<string[]>();
  btnCategory(category:string){
      this.categoryName.emit(category);
  }
  btnAllBooks(){
   this.allCategory.emit();
  }
}
