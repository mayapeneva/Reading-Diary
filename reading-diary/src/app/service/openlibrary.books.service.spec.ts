import { TestBed } from '@angular/core/testing';

import { OpenLibraryBooksService } from './openlibrary.books.service';

describe('BooksService', () => {
  let service: OpenLibraryBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenLibraryBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
