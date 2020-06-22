import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [TagComponent]
})
export class TagModule { }
