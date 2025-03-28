import { Component, Input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { GoogleApiBooks } from '../../models/googleapi.books.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [BookComponent, NgFor, NgIf],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {
  @Input() books?: GoogleApiBooks;
}
