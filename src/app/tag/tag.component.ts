import { Component, OnInit, Input } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../icon/iconType';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() text: string;
  @Input() icon: IconName;
  iconColor = Colors.primary;
  constructor() { }

  ngOnInit(): void {
  }

}
