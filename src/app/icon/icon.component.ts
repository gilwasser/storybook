import { Component, OnInit, Input } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab} from '@fortawesome/free-brands-svg-icons'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconName, Colors, } from './iconType';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})

export class IconComponent implements OnInit {
  @Input() color = Colors;
  @Input() icon : IconName;
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
    console.log(res);
    return (res)
  }



}


