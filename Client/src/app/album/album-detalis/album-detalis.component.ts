import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album-detalis',
  templateUrl: './album-detalis.component.html',
  styleUrls: ['./album-detalis.component.css']
})
export class AlbumDetalisComponent implements OnInit {
  id: any ;
  album! : IAlbum;


  constructor(private route: ActivatedRoute , private api: ApiService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ;
    this.getAlbum();

    console.log(this.id);
    
  }

  getAlbum(){

    this.api.getAlbum(this.id).subscribe((res)=>{

      this.album = res; 
      console.log(this.album);
      
    },
    error =>{console.log(error);
    });

  }

}
