import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SideMenuComponent} from "./side-menu.component";
import {ButtonModule} from "../button/button.module";
import {ProfilePicModule} from "../profile-pic/profile-pic.module";

@NgModule({
  declarations: [SideMenuComponent],
    imports: [
        CommonModule,
        ButtonModule,
        ProfilePicModule
    ],
  exports:[SideMenuComponent]
})
export class SideMenuModule { }
