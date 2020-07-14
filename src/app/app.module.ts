import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {IconModule} from "./icon/icon.module";

@NgModule({
  declarations: [
    AppComponent,
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
