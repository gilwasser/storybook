import { Component, OnInit, Input } from '@angular/core';
import { IconName, Colors } from '../icon/iconType';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  icon : IconName = IconName.star;
  iconColor : Colors = Colors.gold;
  @Input() stars: number;
  @Input() votes: number;
  constructor() { }

  ngOnInit(): void {
  }

}
