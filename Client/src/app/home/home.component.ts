import { Component, OnInit } from '@angular/core';
import { IAlbum } from '../modals/album';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private api : ApiService) { }

  albums : IAlbum[] = [] ;

  ngOnInit(): void {

    this.getAlbums();
  }

  getAlbums(){

    this.api.getAlbums().subscribe( (res)=> {

      this.albums = res;
      console.log(this.albums);
      
    } , error => {
      console.log(error);
      
    }  );

  }

}
