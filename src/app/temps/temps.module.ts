import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempsComponent } from './temps.component';



@NgModule({
  declarations: [TempsComponent],
  imports: [
    CommonModule
  ],
  exports:[TempsComponent]
})
export class TempsModule { }
