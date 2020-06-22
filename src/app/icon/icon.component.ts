import { Component, OnInit, Input } from '@angular/core';
import { faMap, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight, faStar, faGem } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})

export class IconComponent implements OnInit {
  @Input() iconStr: string;
  @Input() color: 'black';
  icon: IconDefinition;
  constructor() {
    this.icon = faChevronRight;
  }

  ngOnInit(): void {
    if (this.iconStr === 'map') this.icon = faMap;
    if (this.iconStr === 'leftArrow') this.icon = faChevronLeft;
    if (this.iconStr === 'rightArrow') this.icon = faChevronRight;
    if (this.iconStr === 'star') this.icon = faStar;
    if (this.iconStr === 'diamond') this.icon = faGem;
  }


}


