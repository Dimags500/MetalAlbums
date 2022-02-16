import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
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
 editAlbumForm = new FormGroup({

  albumName : new FormControl(''),
  albumAuthor : new FormControl('') ,
  albumYear : new FormControl('0') ,
  albumPicture : new FormControl('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg') 


});

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.albumInit(this.albumID);
    
  }



  
  onSubmitAlbum(){


    let albumAuthor =  this.editAlbumForm.get('albumAuthor') as AbstractControl;
    this.album.author = albumAuthor.value;

    let albumName =  this.editAlbumForm.get('albumName') as AbstractControl;
    this.album.albumName = albumName.value;

    let albumYear =  this.editAlbumForm.get('albumYear') as AbstractControl;
    this.album.year = albumYear.value;

    let albumPicture = this.editAlbumForm.get('albumPicture') as AbstractControl;
    this.album.albumPicture = albumPicture.value ;

    

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
      albumPicture : this.album.albumPicture
    }

    this.editAlbumForm.setValue(alb);

  }

}
