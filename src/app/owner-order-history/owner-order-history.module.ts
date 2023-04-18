import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerOrderHistoryPageRoutingModule } from './owner-order-history-routing.module';

import { OwnerOrderHistoryPage } from './owner-order-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerOrderHistoryPageRoutingModule
  ],
  declarations: [OwnerOrderHistoryPage]
})
export class OwnerOrderHistoryPageModule {}
