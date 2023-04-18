import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerTradeRequestPage } from './owner-trade-request.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerTradeRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerTradeRequestPageRoutingModule {}
