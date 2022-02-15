import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAlbum } from '../modals/album';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  getAlbums(){
    return this.http.get<IAlbum[]>('https://localhost:7199/Album ');
  }

  getAlbum(id :string){
    return this.http.get<IAlbum>('https://localhost:7199/Album/'+ id)
  }
}
