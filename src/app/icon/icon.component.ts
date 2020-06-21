import { Component, OnInit, Input } from '@angular/core';
import { faMap, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})

export class IconComponent implements OnInit {
  @Input() iconStr: string;
  icon: IconDefinition;
  constructor() {
    this.icon = faChevronRight;
  }

  ngOnInit(): void {
    if (this.iconStr === 'map') this.icon = faMap;
    if (this.iconStr === 'leftArrow') this.icon = faChevronLeft;
    if (this.iconStr === 'rightArrow') this.icon = faChevronRight;
  }


}


