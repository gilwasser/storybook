import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';
import {IconModule} from "./icon/icon.module";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureSliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
