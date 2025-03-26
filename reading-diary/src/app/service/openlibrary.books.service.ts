import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OpenLibraryBooks } from '../models/openlibrary.books.model';

const mainPath = "https://openlibrary.org/search.json?";
const subjectPath = "http://openlibrary.org/subjects/"

@Injectable({
  providedIn: 'root'
})

export class OpenLibraryBooksService {

  constructor(private httpClient: HttpClient) { }

  findBookByTitle(title: string): Observable<OpenLibraryBooks> {
    const queryString = `${mainPath}title=${title.replaceAll(' ', '+')}`;
    return this.httpClient.get<OpenLibraryBooks>(queryString);
  }

  findBookByAuthor(author: string): Observable<OpenLibraryBooks> {
    const queryString = `${mainPath}author=${author.replaceAll(' ', '+')}&sort=new`;
    return this.httpClient.get<OpenLibraryBooks>(queryString);
  }

  findBookByIsbn(isbn: string): Observable<OpenLibraryBooks> {
    const queryString = `${mainPath}isbn=${isbn}`;
    return this.httpClient.get<OpenLibraryBooks>(queryString);
  }

  findBookBySubject(subject: string): Observable<OpenLibraryBooks> {
    const queryString = `${subjectPath}${subject.replaceAll(' ', '+')}.json`;
    return this.httpClient.get<OpenLibraryBooks>(queryString);
  }

  findBookByQuery(query: string): Observable<OpenLibraryBooks> {
    const queryString = `${mainPath}q=${query.replaceAll(' ', '+')}&sort=new`;
    return this.httpClient.get<OpenLibraryBooks>(queryString);
  }
}
