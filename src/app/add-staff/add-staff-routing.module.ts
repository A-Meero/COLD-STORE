import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStaffPage } from './add-staff.page';

const routes: Routes = [
  {
    path: '',
    component: AddStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStaffPageRoutingModule {}
