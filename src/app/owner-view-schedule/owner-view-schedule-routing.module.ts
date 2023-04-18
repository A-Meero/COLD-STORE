import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerViewSchedulePage } from './owner-view-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerViewSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerViewSchedulePageRoutingModule {}
