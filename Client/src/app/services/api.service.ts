import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAlbum } from '../modals/album';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;


  constructor(private http : HttpClient) { }


  getAlbums(){
    return this.http.get<IAlbum[]>(this.baseUrl);
  }

  getAlbum(id :string){
    return this.http.get<IAlbum>(this.baseUrl + id)
  }

  deleteAlbum(id : string){
    return this.http.delete(this.baseUrl+ id) ;
  }

  createAlbum(album : IAlbum){
    
    // this.http.post<IAlbum>('https://localhost:7199/Album ');

    console.log('before' + (album as IAlbum));
    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(album);
    console.log('after ' + body);
    

    // let amd = {
    //   "author": album.author,
    //   "albumName": album.albumName,
    //   "year": album.year,
    //   "albumPicture": album.albumPicture,
    //   "songs": album.songs
      
    //       }

     return this.http.post<any>(this.baseUrl, album );
    

  }
}
