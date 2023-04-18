import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierViewPage } from './supplier-view.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierViewPageRoutingModule {}
