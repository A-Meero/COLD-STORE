import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierOrderPageRoutingModule } from './supplier-order-routing.module';

import { SupplierOrderPage } from './supplier-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierOrderPageRoutingModule
  ],
  declarations: [SupplierOrderPage]
})
export class SupplierOrderPageModule {}
