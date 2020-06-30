import {Component, Input, OnInit} from '@angular/core';
import {CardColor} from "./card.enum";
import {TagSize} from "../tag/tag.enum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() color: CardColor = CardColor.default;
  @Input() category: string;
  @Input() title: string;
  @Input() text: string;
  @Input() tags: string[];

  tagSize = TagSize.small;
  constructor() {
  }

  ngOnInit(): void {
  }

}
