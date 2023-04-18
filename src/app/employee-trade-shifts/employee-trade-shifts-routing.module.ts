import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTradeShiftsPage } from './employee-trade-shifts.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTradeShiftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeTradeShiftsPageRoutingModule {}
