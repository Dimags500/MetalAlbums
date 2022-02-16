import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/services/api.service';
import { PicturesService } from 'src/app/services/Pictures.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  album!: IAlbum ;

 //new album form 
 newAlbumForm = new FormGroup({

  albumName : new FormControl(''),
  albumAuthor : new FormControl('') ,
  albumYear : new FormControl('0') ,
  albumPicture : new FormControl('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg') 


});


  constructor( private api : ApiService ) {}
  ngOnInit() {
    this.albumInit();
  
    
    
  }


  onSubmitAlbum(){


    let albumAuthor =  this.newAlbumForm.get('albumAuthor') as AbstractControl;
    this.album.author = albumAuthor.value;

    let albumName =  this.newAlbumForm.get('albumName') as AbstractControl;
    this.album.albumName = albumName.value;

    let albumYear =  this.newAlbumForm.get('albumYear') as AbstractControl;
    this.album.year = albumYear.value;

    let albumPicture = this.newAlbumForm.get('albumPicture') as AbstractControl;
    this.album.albumPicture = albumPicture.value ;

    console.log(this.album);
    

    this.creaeAlbum(this.album) ; 
 
  }

  creaeAlbum(album : IAlbum){
    this.api.createAlbum(album).subscribe();
    // location.reload();      

  }

  private albumInit(){
    this.album  = {
      albumName: "no",
      author: "no ",
      year: 0,
      albumPicture: "test",
      songs:[{
        songName: "string",
        year: 0,
        trackNumber: 0
      }]
    } 
  }

}
