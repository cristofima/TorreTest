import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationPipe } from './pipes/compensation.pipe';

@NgModule({
  declarations: [CompensationPipe],
  imports: [
    CommonModule
  ],
  exports: [CompensationPipe]
})
export class SharedModule { }
