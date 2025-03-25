import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books.model';

const path = 'https://www.googleapis.com/books/v1/volumes';
const isbn = 'isbn'
const authentication = 'key';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private httpClient: HttpClient) { }

  findBookByIsbn(searchTerm: string): Observable<Books> {
    const queryString = `${path}?q=${isbn}:${searchTerm}&${authentication}=${GoogleApiApiKey}`;
    return this.httpClient.get<Books>(queryString);
  }
}
