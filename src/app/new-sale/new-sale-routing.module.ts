import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSalePage } from './new-sale.page';

const routes: Routes = [
  {
    path: '',
    component: NewSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSalePageRoutingModule {}
