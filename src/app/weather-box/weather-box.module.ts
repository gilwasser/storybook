import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './weather-box.component';
import { TempsModule } from '../temps/temps.module';
import { DateModule } from '../date/date.module';



@NgModule({
  declarations: [WeatherBoxComponent, ],
  imports: [
    CommonModule,
    TempsModule,
    DateModule
  ],
  exports:[WeatherBoxComponent]
})
export class WeatherBoxModule { }
