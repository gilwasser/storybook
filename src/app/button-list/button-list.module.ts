import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonListComponent } from './button-list.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [ButtonListComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[ButtonListComponent]
})
export class ButtonListModule { }
