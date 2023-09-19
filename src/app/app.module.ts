import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import {FootballDetailModule} from "./football/football-detail/football-detail.module";
import {FootballItemComponent} from "./football/football-list/football-item/football-item.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FootballService} from "./football/football.service";
import {FootballHeaderComponent} from "./football/football-header/football-header.component";
import {FootballComponent} from "./football/football.component";
import {FootballInterceptorService} from "./football/football-interceptor.service";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    FootballHeaderComponent,
    FootballListComponent,
    FootballItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FootballDetailModule,
    NgOptimizedImage
  ],
  providers: [
    FootballService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
