import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import { FootballItemComponent } from './football/football-item/football-item.component';
import { FootballDetailComponent } from './football/football-detail/football-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootballListComponent,
    FootballItemComponent,
    FootballDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
