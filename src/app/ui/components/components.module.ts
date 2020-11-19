import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { JobsComponent } from './jobs/jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PeopleComponent, JobsComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  exports: [PeopleComponent, JobsComponent]
})
export class ComponentsModule { }
