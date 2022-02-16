import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlbumDetalisComponent } from './album/album-detalis/album-detalis.component';
import { ApiService } from './services/api.service';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAlbumComponent } from './pages/add-album/add-album.component';
import { UpdateAlbumComponent } from './pages/update-album/update-album.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlbumComponent,
    AlbumDetalisComponent,
    AdminPageComponent,
    AddAlbumComponent ,
    UpdateAlbumComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
