import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffListPage } from './staff-list.page';

const routes: Routes = [
  {
    path: '',
    component: StaffListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffListPageRoutingModule {}
