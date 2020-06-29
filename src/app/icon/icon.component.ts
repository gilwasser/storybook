import {Component, Input, OnInit} from '@angular/core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {Colors, IconName,} from './iconType';
import {Size} from "./size.enum";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() color = Colors.primary;
  @Input() icon : IconName;
  @Input() size : Size = Size.medium;
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far,fab)
  }

  ngOnInit(): void {

  }

  getIcon(): any[]{
    let array = this.icon.split('-');
    let res = []
    res[0] = array[0];

    res[1] = array.slice(1).join('-');
    return (res)
  }



  getClass(){
    return this.size + ' ' + this.color;
  }

}


