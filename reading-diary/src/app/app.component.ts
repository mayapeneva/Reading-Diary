import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavigationComponent],
  providers: [HttpClient]
})

export class AppComponent {
}
