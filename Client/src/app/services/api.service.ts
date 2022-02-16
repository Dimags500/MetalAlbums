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
    
     return this.http.post<any>(this.baseUrl, album );
    

  }

  updateAlbum(album : IAlbum  , id : string){

    const body = {"id" : id , "album": album}

    console.log(body);


    return this.http.put<any>(this.baseUrl + id, album);

  }
}
