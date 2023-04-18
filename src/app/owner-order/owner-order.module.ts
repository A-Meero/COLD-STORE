import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerOrderPageRoutingModule } from './owner-order-routing.module';

import { OwnerOrderPage } from './owner-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerOrderPageRoutingModule
  ],
  declarations: [OwnerOrderPage]
})
export class OwnerOrderPageModule {}
