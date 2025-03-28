import { Component, Input } from '@angular/core';
import { GoogleApiBook } from '../../models/googleapi.book.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})

export class BookComponent {
  @Input() book?: GoogleApiBook;
}
