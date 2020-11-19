import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenomaPageRoutingModule } from './genoma-routing.module';

import { GenomaPage } from './genoma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenomaPageRoutingModule
  ],
  declarations: [GenomaPage]
})
export class GenomaPageModule {}
