import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenomaPage } from './genoma.page';

const routes: Routes = [
  {
    path: '',
    component: GenomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenomaPageRoutingModule {}
