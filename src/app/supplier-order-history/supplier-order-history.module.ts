import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierOrderHistoryPageRoutingModule } from './supplier-order-history-routing.module';

import { SupplierOrderHistoryPage } from './supplier-order-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierOrderHistoryPageRoutingModule
  ],
  declarations: [SupplierOrderHistoryPage]
})
export class SupplierOrderHistoryPageModule {}
