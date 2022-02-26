import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() album! : IAlbum
@Input() author! : IAuthor

  constructor() { }

  ngOnInit() {
  }

}
