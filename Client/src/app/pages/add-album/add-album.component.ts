import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
 //new album form 
  newAlbumForm!: FormGroup;

//  newAlbumForm = new FormGroup({

//   albumName : new FormControl(''),
//   albumAuthor : new FormControl('') ,
//   albumYear : new FormControl('0') ,
//   albumPicture : new FormControl('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg') ,
//   songs : new FormArray([
//     new FormGroup ({
//       songName: new FormControl(''),
//       year: new FormControl(1970),
//       trackNumber: new FormControl(1)
//     }) 
//   ])  
// });

//  newSongsForm = new FormGroup({
//       songName: new FormControl(''),
//       year: new FormControl(1970),
//       trackNumber: new FormControl(1)
//  })


  constructor( private api : ApiService , private formBuilder: FormBuilder) {

    
  
  }
  ngOnInit() {

    // this.albumInit();

    // this.newAlbumForm = this.formBuilder.group({
    //   songs: this.formBuilder.array([this.createSongsGroup])
    // })  

    this.onAlbumInit();

  }


  onAlbumInit(){

    this.newAlbumForm = this.formBuilder.group({

      albumName : [''] ,
      albumAuthor : [''] ,
      albumYear : [''],
      albumPicture : [''] ,
      // songs : this.formBuilder.group({
      //   songName: [] ,
      //   year: [] ,
      //   trackNumber: []
      // }),
      songs : this.formBuilder.array([this.createSong()])


    })
    
    // this.newAlbumForm = new FormGroup({

    //     albumName : new FormControl(''),
    //     albumAuthor : new FormControl('') ,
    //     albumYear : new FormControl('0') ,
    //     albumPicture : new FormControl('https://www.acceptworldwide.com/wp-content/uploads/2017/06/Objection_Overruled_album.jpg') ,

    //     address:new FormGroup({
    //       streetControl : new FormControl(),
    //       postalcodeControl: new FormControl()
    //     })
    //     songs : new FormArray([
    //       new FormGroup ({
    //         songName: new FormControl(''),
    //         year: new FormControl(1970),
    //         trackNumber: new FormControl(1)
    //       }) 
    //     ])  
    //   });
      
  }

  
  createSong():FormGroup{
    return this.formBuilder.group({
        songName: [''] ,
        year: [1970] ,
        trackNumber: [1]
    })
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
