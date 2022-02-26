import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums:IAlbum[] = [] ;
  authors:IAlbum[] = [] ;


  constructor(private api : ApiService) { }

  ngOnInit() {

   this.getAuthors()
   this.getAlbums();

  }


  getAlbums(){
    this.api.get('album').subscribe((data)=>{
     this.albums = data
      
    } ,
    error => console.log(error)
    )
  }

  getAuthors(){
    this.api.get('author').subscribe((data)=>{
     this.authors = data
     console.log(this.authors);
     
      
    } ,
    error => console.log(error)
    )
  }

}
