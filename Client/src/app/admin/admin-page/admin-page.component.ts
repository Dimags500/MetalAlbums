import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  albums:IAlbum[] = [];
  editMode: boolean = false ;
  constructor( private api :ApiService) { }

  ngOnInit(): void {
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
  }

  chengeMode(){

    this.editMode = !this.editMode;
  }

  

}
