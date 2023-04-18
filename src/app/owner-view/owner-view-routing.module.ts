import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerViewPage } from './owner-view.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerViewPageRoutingModule {}
