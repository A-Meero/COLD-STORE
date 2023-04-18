import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewStockPageRoutingModule } from './view-stock-routing.module';

import { ViewStockPage } from './view-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewStockPageRoutingModule
  ],
  declarations: [ViewStockPage]
})
export class ViewStockPageModule {}
