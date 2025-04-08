import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GoogleApiBooksService } from '../../service/googleapi.books.service';
import { OpenLibraryBooksService } from '../../service/openlibrary.books.service';
import { GoogleApiBooks } from '../../models/googleapi.books.model';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-searchbooks',
  imports: [RouterModule, ReactiveFormsModule, BooksComponent],
  templateUrl: './searchbooks.component.html',
  styleUrl: './searchbooks.component.css'
})

export class SearchbooksComponent {
  titleForm = new FormGroup({ "input": new FormControl('') });
  authorForm = new FormGroup({ "input": new FormControl('') });
  isbnForm = new FormGroup({ "input": new FormControl('') });
  keywordsForm = new FormGroup({ "input": new FormControl('') });

  searchedBooks?: GoogleApiBooks;

  constructor(private openlibraryBooksService: OpenLibraryBooksService, private googleApiBooksService: GoogleApiBooksService) { }

  searchByTitle() {
    let title = this.titleForm.get("input")?.value;
    if (title && this.titleForm.get("input")?.valid)
      this.googleApiBooksService.findBookByTitle(title)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(async data => {
          this.searchedBooks = data;
        });
  }

  searchByAuthor() {
    let author = this.authorForm.get("input")?.value;
    if (author && this.authorForm.get("input")?.valid)
      this.googleApiBooksService.findBookByAuthor(author)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(data => {
          this.searchedBooks = data;
        });
  }

  searchByISBN() {
    let isbn = this.isbnForm.get("input")?.value;
    if (isbn && this.isbnForm.get("input")?.valid)
      this.googleApiBooksService.findBookByIsbn(isbn)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(data => {
          this.searchedBooks = data;
        });
  }

  searchByKeywords() {
    let keywords = this.keywordsForm.get("input")?.value;
    if (keywords && this.keywordsForm.get("input")?.valid)
      this.googleApiBooksService.findBookByKeywords(keywords)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(data => {
          this.searchedBooks = data;
        });
  }
}
