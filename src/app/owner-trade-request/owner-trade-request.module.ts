import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerTradeRequestPageRoutingModule } from './owner-trade-request-routing.module';

import { OwnerTradeRequestPage } from './owner-trade-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerTradeRequestPageRoutingModule
  ],
  declarations: [OwnerTradeRequestPage]
})
export class OwnerTradeRequestPageModule {}
