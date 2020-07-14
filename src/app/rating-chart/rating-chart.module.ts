import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingChartComponent } from './rating-chart.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [RatingChartComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports:[RatingChartComponent]
})
export class RatingChartModule { }
