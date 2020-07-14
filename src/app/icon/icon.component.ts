import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IconName, IconSize} from "./icon.enum";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: IconName;
  @Input() size :IconSize;
  constructor() {
  }

  ngOnInit(): void {
  }

}
