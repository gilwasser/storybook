import {Component, Input, OnInit} from '@angular/core';
import {ButtonColor, ButtonSize} from "./button.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon?;
  @Input() text: string;
  @Input() color: ButtonColor = ButtonColor.none;
  @Input() size: ButtonSize = ButtonSize.medium;
  constructor() { }

  ngOnInit(): void {
  }

}
