import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  @Input() albumID: any; 


  album!: IAlbum ;

 //new album form 
 albumForm = new FormGroup({

  albumName : new FormControl(''),
    albumAuthor : new FormControl('') ,
    albumYear : new FormControl('1973') ,
    albumPicture : new FormControl('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg') ,
    songs: new FormArray([
      new FormGroup({
        songName: new FormControl(''),
        year: new FormControl('') ,
        trackNumber: new FormControl('') 
      })
    ])


});

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.albumInit(this.albumID);
    
  }



  
  onSubmitAlbum(){


    let albumAuthor =  this.albumForm.get('albumAuthor') as AbstractControl;
    this.album.author = albumAuthor.value;

    let albumName =  this.albumForm.get('albumName') as AbstractControl;
    this.album.albumName = albumName.value;

    let albumYear =  this.albumForm.get('albumYear') as AbstractControl;
    this.album.year = albumYear.value;

    let albumPicture = this.albumForm.get('albumPicture') as AbstractControl;
    this.album.albumPicture = albumPicture.value ;

    let songs = this.songs
    this.album.songs = songs.value ;

    

    this.UpdateAlbum(this.album , this.albumID) ; 
 
  }

  UpdateAlbum(album : IAlbum , id :string ){

    
    this.api.updateAlbum(album , id).subscribe();
  }


  albumInit(id : any){
    this.api.getAlbum(id).subscribe((data)=>{
      this.album = data ; 
      this.formInit();

    }, error =>{
      console.log(error);
      
    });
  }

  formInit(){

    let alb = {
      albumAuthor : this.album.author ,
      albumName: this.album.albumName ,
      albumYear: this.album.year ,
      albumPicture : this.album.albumPicture ,
      songs : this.album.songs 
    }

    this.albumForm.setValue(alb);

  }


  addSong() {
    const group = new FormGroup({
      songName: new FormControl(''),
      year: new FormControl('') ,
      trackNumber: new FormControl('') 
    });

    this.songs.push(group);
  }

  get songs() {
    return this.albumForm.get('songs') as FormArray;
  }

}
