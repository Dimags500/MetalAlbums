import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './servises/api.service';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    CardComponent,
    CardsComponent
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
