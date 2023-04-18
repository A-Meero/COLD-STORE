import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesReportPage } from './sales-report.page';

const routes: Routes = [
  {
    path: '',
    component: SalesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesReportPageRoutingModule {}
