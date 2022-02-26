import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() album! : IAlbum
  @Input() author! : IAuthor
  constructor() { }

  ngOnInit(): void {
  }

}
