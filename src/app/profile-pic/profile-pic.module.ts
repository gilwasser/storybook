import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePicComponent} from "./profile-pic.component";
import {IconModule} from "../icon/icon.module";



@NgModule({
  declarations: [ProfilePicComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[ProfilePicComponent]
})
export class ProfilePicModule { }
