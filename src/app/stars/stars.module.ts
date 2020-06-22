import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { StarsComponent } from './stars.component';



@NgModule({
  declarations: [StarsComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[StarsComponent]
})
export class StarsModule { }
