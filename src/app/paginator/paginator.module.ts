import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule
  ],
  exports:[PaginatorComponent]
})
export class PaginatorModule { }
