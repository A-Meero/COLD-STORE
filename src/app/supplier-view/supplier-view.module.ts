import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierViewPageRoutingModule } from './supplier-view-routing.module';

import { SupplierViewPage } from './supplier-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierViewPageRoutingModule
  ],
  declarations: [SupplierViewPage]
})
export class SupplierViewPageModule {}
