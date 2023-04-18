import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffViewSchedulePage } from './staff-view-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: StaffViewSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffViewSchedulePageRoutingModule {}
