import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  gameName:string= ""
  @Input()
  gameCover:string= ""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  baseURL:string = "https://www.youtube.com/search?q=trailer"
  constructor() { }

  ngOnInit(): void {
  }

}
