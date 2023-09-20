import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import {FootballItemComponent} from "./football/football-list/football-item/football-item.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FootballService} from "./football/service/football.service";
import {FootballHeaderComponent} from "./football/football-header/football-header.component";
import {FootballComponent} from "./football/football.component";
import {FootballInterceptorService} from "./football/service/football-interceptor.service";
import {NgOptimizedImage} from "@angular/common";
import {FootballDetailComponent} from "./football/football-detail/football-detail.component";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    FootballHeaderComponent,
    FootballListComponent,
    FootballItemComponent,
    FootballDetailComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
