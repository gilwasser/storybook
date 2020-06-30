import {Component, Input, OnInit} from '@angular/core';
import {Card} from "./card-grid";

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  @Input() data: Card[];
  constructor() { }

  ngOnInit(): void {
  }

}
