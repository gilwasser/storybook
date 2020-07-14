import { Component } from '@angular/core';
import {IconName} from "./icon/icon.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    icon = IconName.menu;

}

