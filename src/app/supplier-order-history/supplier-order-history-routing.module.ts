import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierOrderHistoryPage } from './supplier-order-history.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierOrderHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierOrderHistoryPageRoutingModule {}
