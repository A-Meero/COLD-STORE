import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerOrderPage } from './owner-order.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerOrderPageRoutingModule {}
