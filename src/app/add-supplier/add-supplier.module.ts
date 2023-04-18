import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSupplierPageRoutingModule } from './add-supplier-routing.module';

import { AddSupplierPage } from './add-supplier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSupplierPageRoutingModule
  ],
  declarations: [AddSupplierPage]
})
export class AddSupplierPageModule {}
