import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeViewPage } from './employee-view.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeViewPageRoutingModule {}
