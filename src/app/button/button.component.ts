import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  theme: string
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(this.icon && this.text) this.theme = 'text-and-icon';
    else if(this.text && isNaN(+this.text)) this.theme = 'text-only';
    else if(this.text) this.theme = 'num-only'
    else if(this.icon) this.theme = 'icon-only';
  }

  buttonClicked():void{
    this.onClick.emit("click")
  }
}
