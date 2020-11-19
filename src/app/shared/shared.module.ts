import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationPipe } from './pipes/compensation.pipe';
import { ExperiencePipe } from './pipes/experience.pipe';

@NgModule({
  declarations: [CompensationPipe, ExperiencePipe],
  imports: [
    CommonModule
  ],
  exports: [CompensationPipe, ExperiencePipe]
})
export class SharedModule { }
