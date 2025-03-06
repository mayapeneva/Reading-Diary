import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavigationComponent]
})

export class AppComponent {
  title = 'reading-diary';
}
 