import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ApiService } from 'src/app/servises/api.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  albums:IAlbum[] = [];
  createMode : boolean = false ;
  editMode : boolean = false ;
  albumToEditID! : any ;


  // serch field
  secrField!: FormControl ;
  secrches : string[] = [] ;


 




  
  constructor( private api : ApiService) { }

  ngOnInit(): void {

    //-----------  serach term ----------
    // this.serch();
    
    this.getAlbums();
  }

  private serch() {
    this.secrField = new FormControl;
    this.secrField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((term: string) => {
        this.secrches.push(term);
      });
  }

  getAlbums(){
    return this.api.get('album').subscribe((data: IAlbum[])=> {

      this.albums = data ;

    }, (error: any) =>{console.log(error);
    });
  }
  deleteAlbum(id: any){

    this.api.delete('album',id).subscribe();
    location.reload();      
  }

  createModeToggle(){
    this.createMode = !this.createMode;
  }


  editModeToggle(id : any ){
    this.albumToEditID = id ;
    this.editMode = !this.editMode ;
  }

  refresh(){
    location.reload();      
  }

 

  

}
