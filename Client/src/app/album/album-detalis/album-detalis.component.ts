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
  id!: string ;
  album! : IAlbum;


  constructor(private route: ActivatedRoute , private api: ApiService ) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.paramMap.get("id") ;

    this.route.paramMap.subscribe((data)=> {

      console.log(data);

      const x = data.get('id');

      this.id = x as string ;
      console.log(x);
      

      
    });

    this.getAlbum();

    
  }

  getAlbum(){

    this.api.getAlbum(this.id ).subscribe((res)=>{

      this.album = res; 
      
    },
    error =>{console.log(error)
    });

  }
 

}


