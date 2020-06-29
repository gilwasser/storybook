import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TextIconButton} from "../button/button";
import {SideMenuButtons, User} from "./side-menu";
import {ProfileStatus} from "../profile-pic/profile-size.enum";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})


export class SideMenuComponent implements OnInit ,OnChanges{
  @Input() user: User;
  @Input() buttons: SideMenuButtons[];
  @Input() active: number = 0;
  @Output() onTabChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() status = ProfileStatus.connect;
  activeTab = 0;
  activeBox = 0;

  constructor() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

        this.checkTab()
    }

  ngOnInit(): void {
    this.checkTab();
    Object.assign(this.buttons, ...this.buttons);
  }

  onButtonClick(box: number,id: number) {
    this.activeBox = box;
    this.activeTab = id;
    this.onTabChange.emit(this.buttons[box].buttons[id].text);
  }

  checkTab() {
    this.activeBox< 0 || this.activeBox > this.buttons.length ? this.activeBox = 0: {};
    this.activeTab = this.active >= 0 && this.active < this.buttons[this.activeBox].buttons.length ? this.active : 0;
  }
}
