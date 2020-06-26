import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../icon/iconType';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() icon: IconName;
  @Input() active : boolean = false ;

  iconColor = Colors.secondary;
  theme: string

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  buttonClicked():void{
    this.onClick.emit("click")
  }

  getClass():string{
    if(this.icon && this.text) return'text-and-icon';
    else if(this.text && isNaN(+this.text)) return'text-only';
    else if(this.icon){
      this.iconColor = Colors.ternary;
      return 'icon-only';}
    else  return'num-only';
  }
}
