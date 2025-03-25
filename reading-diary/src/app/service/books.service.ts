import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books.model';
import { environment } from '../../environments/environment.development';

const path = 'https://www.googleapis.com/books/v1/volumes';
const authentication = 'key';

@Injectable({
  providedIn: 'root'
})
 
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  findBookByIsbn(isbn: string): Observable<Books> {
    const queryString = `${path}?q=isbn:${isbn}&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<Books>(queryString);
  }

  findBookByTitle(title: string): Observable<Books> {
    const queryString = `${path}?q=intitle:${title}&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<Books>(queryString);
  }

  findBookByAuthor(author: string): Observable<Books> {
    const queryString = `${path}?q=inauthor:${author}+orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<Books>(queryString);
  }

  findBookByPublisher(publisher: string): Observable<Books> {
    const queryString = `${path}?q=inpublisher:${publisher}&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<Books>(queryString);
  }

  findBookByCategory(category: string): Observable<Books> {
    const queryString = `${path}?q=subject:${category}&orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<Books>(queryString);
  } 
}
