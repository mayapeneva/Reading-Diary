import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleApiBooks } from '../models/googleapi.books.model';
import { environment } from '../../environments/environment.development';

const path = 'https://www.googleapis.com/books/v1/volumes';
const authentication = 'key';

@Injectable({
  providedIn: 'root'
})

export class GoogleApiBooksService {

  constructor(private httpClient: HttpClient) { }

  findBookByIsbn(isbn: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=isbn:${isbn}&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }

  findBookByTitle(title: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=intitle:${title.replaceAll(' ', '+')}&orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }

  findBookByAuthor(author: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=inauthor:${author.replaceAll(' ', '+')}&orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }

  findBookByPublisher(publisher: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=inpublisher:${publisher.replaceAll(' ', '+')}&orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }

  findBookByKeywords(keywords: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=${keywords.replaceAll(' ', '+')}&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }

  findBookBySubject(subject: string): Observable<GoogleApiBooks> {
    const queryString = `${path}?q=subject:${subject.replaceAll(' ', '+')}&orderBy=newest&${authentication}=${environment.googleApi_ApiKey}`;
    return this.httpClient.get<GoogleApiBooks>(queryString);
  }
}
