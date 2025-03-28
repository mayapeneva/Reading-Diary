import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpenLibraryBooksService } from '../../service/openlibrary.books.service';
import { GoogleApiBooksService } from '../../service/googleapi.books.service';
import { catchError } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpenLibraryBooks } from '../../models/openlibrary.books.model';

@Component({
  selector: 'app-searchbooks',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './searchbooks.component.html',
  styleUrl: './searchbooks.component.css'
})

export class SearchbooksComponent {
  titleForm = new FormGroup({ "input": new FormControl('') });
  authorForm = new FormGroup({ "input": new FormControl('') });
  isbnForm = new FormGroup({ "input": new FormControl('') });
  keywordsForm = new FormGroup({ "input": new FormControl('') });

  searchedBooks?: OpenLibraryBooks;

  constructor(private openlibraryBooksService: OpenLibraryBooksService, private googleApiBooksService: GoogleApiBooksService) { }

  searchByTitle() {
    let title = this.titleForm.get("input")?.value;
    if (title && this.titleForm.get("input")?.valid)
      this.openlibraryBooksService.findBookByTitle(title)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(data => {
          this.searchedBooks = data;
        });
  }

  searchByAuthor() {
    let author = this.authorForm.get("input")?.value;
    if (author && this.authorForm.get("input")?.valid)
      this.openlibraryBooksService.findBookByAuthor(author)
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
      this.openlibraryBooksService.findBookByIsbn(isbn)
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
      this.openlibraryBooksService.findBookByQuery(keywords)
        .pipe(catchError(error => {
          console.log(error);
          throw error;
        }))
        .subscribe(data => {
          this.searchedBooks = data;
        });
  }
}
