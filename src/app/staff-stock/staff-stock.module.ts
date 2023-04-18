import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffStockPageRoutingModule } from './staff-stock-routing.module';

import { StaffStockPage } from './staff-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffStockPageRoutingModule
  ],
  declarations: [StaffStockPage]
})
export class StaffStockPageModule {}
