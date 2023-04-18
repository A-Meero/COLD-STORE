import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewStockPage } from './view-stock.page';

const routes: Routes = [
  {
    path: '',
    component: ViewStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewStockPageRoutingModule {}
