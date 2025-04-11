import { Component, Input } from '@angular/core';
import { GoogleApiBook } from '../../models/googleapi.book.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})

export class BookComponent {
  @Input() book?: GoogleApiBook;

  getBookImage(): string {
    return this.book && this.book.volumeInfo && this.book.volumeInfo.imageLinks && this.book.volumeInfo.imageLinks.thumbnail
      ? this.book.volumeInfo.imageLinks.thumbnail
      : "/noImage.jpg";
  }

  getBookDescription(): string {
    return this.book && this.book.volumeInfo && this.book.volumeInfo.description
    ? `${this.book.volumeInfo.description?.substring(0, 200)}.....`
    : "No description available";
  }
}
