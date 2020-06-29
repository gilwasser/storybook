import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../icon/iconType';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
    let str:string;
    if(this.icon && this.text) str = 'text-and-icon';
    else if(!this.icon && this.text && isNaN(+this.text)) str = 'text-only'
    else if( !this.text && this.icon) {
      this.iconColor = Colors.complementary;
      str = 'icon-only'
    }
    else str = 'num-only'
    if(this.active) str += ' active';
    return str
  }
}
