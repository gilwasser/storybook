import { Component, OnInit, Input } from '@angular/core';
import { IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() stars: number;
  @Input() votes: number;
  constructor() { }

  ngOnInit(): void {
  }

}
