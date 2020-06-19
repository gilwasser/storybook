import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { TempsComponent } from './temps/temps.component';
import { WeatherBoxComponent } from './weather-box/weather-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    TempsComponent,
    WeatherBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
