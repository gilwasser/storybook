import {Component, Input, OnInit} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../icon/iconType';
import {TagSize} from "./tag.enum";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() text: string;
  @Input() icon: IconName;
  @Input() size: TagSize = TagSize.small ;
  iconColor = Colors.primary;
  constructor() { }

  ngOnInit(): void {
  }

}
