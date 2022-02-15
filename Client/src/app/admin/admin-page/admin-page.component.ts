import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/services/api.service';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  albums:IAlbum[] = [];
  editMode: boolean = false ;
  album!: IAlbum ;



  secrField!: FormControl ;
  secrches : string[] = [] ;

  //new album form 

  newAlbumForm = new FormGroup({

    albumName : new FormControl('some album'),
    albumAuthor : new FormControl('some author') ,
    albumYear : new FormControl('000')

  });




  
  constructor( private api :ApiService) { }

  ngOnInit(): void {

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

    this.secrField = new FormControl;
    this.secrField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe ((term: string) => {
      this.secrches.push(term);
    })
    
    this.getAlbums();
  }

  getAlbums(){
    return this.api.getAlbums().subscribe((data)=> {

      this.albums = data ;
      console.log(this.albums);

    }, error =>{console.log(error);
    });
  }
  deleteAlbum(id: any){
    console.log(id);

    this.api.deleteAlbum(id).subscribe();
    location.reload();      
  }

  chengeMode(){
    this.editMode = !this.editMode;
  }

  onSubmitAlbum(){


    let albumAuthor =  this.newAlbumForm.get('albumAuthor') as AbstractControl;
    this.album.author = albumAuthor.value;

    let albumName =  this.newAlbumForm.get('albumName') as AbstractControl;
    this.album.albumName = albumName.value;

    let albumYear =  this.newAlbumForm.get('albumYear') as AbstractControl;
    this.album.year = albumYear.value;

    console.log(this.album);
    

    this.creaeAlbum(this.album) ; 
 
  }

  creaeAlbum(album : IAlbum){
    this.api.createAlbum(album).subscribe();
    location.reload();      

  }

  

}
