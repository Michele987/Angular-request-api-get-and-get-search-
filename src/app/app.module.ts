import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GiphyComponent,
    GiphyDetailComponent,
    PageNotFoundComponent,
    GiphySearchComponent
  ],
  imports: [HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
