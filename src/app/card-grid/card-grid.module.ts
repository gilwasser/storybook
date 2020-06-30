import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import {CardModule} from "../card/card.module";



@NgModule({
  declarations: [CardGridComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[CardGridComponent]
})
export class CardGridModule { }
