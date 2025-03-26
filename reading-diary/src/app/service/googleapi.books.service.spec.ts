import { TestBed } from '@angular/core/testing';

import { GoogleApiBooksService as GoogleApiBooksService } from './googleapi.books.service';

describe('GoogleApiBooksService', () => {
  let service: GoogleApiBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleApiBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
