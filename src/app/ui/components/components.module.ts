import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { JobsComponent } from './jobs/jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { CountdownClockComponent } from './countdown-clock/countdown-clock.component';

@NgModule({
  declarations: [PeopleComponent, JobsComponent, CountdownClockComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  exports: [PeopleComponent, JobsComponent, CountdownClockComponent]
})
export class ComponentsModule { }
