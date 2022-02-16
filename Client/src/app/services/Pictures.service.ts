import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

constructor(private http : HttpClient) { }

getDefualtPicture(){
  return this.http.get('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg');
}

}
