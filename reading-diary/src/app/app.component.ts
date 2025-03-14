import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { HttpClient } from '@angular/common/http';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ NavigationComponent],
  providers: [ HttpClient, BooksService ]
})

export class AppComponent {
}
 