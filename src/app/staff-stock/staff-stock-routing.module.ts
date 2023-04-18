import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffStockPage } from './staff-stock.page';

const routes: Routes = [
  {
    path: '',
    component: StaffStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffStockPageRoutingModule {}
