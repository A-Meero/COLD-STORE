import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierListPage } from './supplier-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierListPageRoutingModule {}
