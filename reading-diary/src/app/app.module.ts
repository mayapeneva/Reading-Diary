import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterOutlet } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BooksService } from "./service/books.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [ ],
    imports: [ BrowserModule, RouterOutlet, AppComponent, NavigationComponent, AppComponent ],
    providers: [ BooksService, HttpClient ]
  })

export class AppModule {}