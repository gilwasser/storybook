import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { TempsComponent } from './temps/temps.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    TempsComponent,
    WeatherBoxComponent,
    IconComponent,
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
