import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerSalesReportPage } from './owner-sales-report.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerSalesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerSalesReportPageRoutingModule {}
