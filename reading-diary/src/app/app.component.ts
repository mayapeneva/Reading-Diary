import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpenLibraryBooksService } from './service/openlibrary.books.service';
import { GoogleApiBooksService } from './service/googleapi.books.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavigationComponent],
  providers: [HttpClient, OpenLibraryBooksService, GoogleApiBooksService]
})

export class AppComponent {

  constructor(private booksService: OpenLibraryBooksService, private googleApiBooksService: GoogleApiBooksService) { }

  ngOnInit() {
    // this.booksService.findBookBySubject("Fiction").subscribe(data => {
    //   console.log(data);
    // });

    // console.log('//////')

    // this.googleApiBooksService.findBookBySubject("Fiction").subscribe(data => {
    //   console.log(data);
    // });
  }
}
