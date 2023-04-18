import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerOrderHistoryPage } from './owner-order-history.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerOrderHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerOrderHistoryPageRoutingModule {}
