import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { TextButton } from '../button/button';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss']
})
export class ButtonListComponent implements OnInit, OnChanges {

  @Input() buttons: TextButton[];
  withIcon: TextButton[] = [];
  withoutIcon: TextButton[] = [];

  @Output() clicked : EventEmitter<string> = new EventEmitter();
  constructor(private cd: ChangeDetectorRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if('buttons' in changes)
      this.sort()
  }

  ngOnInit(): void {
   this.sort()
  }

  sort(){
    let iconButtons: TextButton[] = [];
    let textButtons: TextButton[] = [];
    for(let button of this.buttons)
    button.icon? iconButtons.push(button): textButtons.push(button);

    this.withIcon = iconButtons;
    this.withoutIcon = textButtons
    this.cd.detectChanges()
  }

  onClick(str:string) {
    this.clicked.emit(str);
  }

}
