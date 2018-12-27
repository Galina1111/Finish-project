import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './conponents';
import { ContactComponent } from './pages';
import { MainNavComponent } from './conponents/main-nav/main-nav.component';
import { AddContactComponent } from './pages';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FilterSerchPipe } from './shared/pipes/filter-serch/filter-serch.pipe';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    MainNavComponent,
    AddContactComponent,
    NotFoundComponent,
    FilterSerchPipe,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
