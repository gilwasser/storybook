import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from './comment.component';
import {IconModule} from "../icon/icon.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    IconModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [CommentComponent]
})
export class CommentModule {
}
