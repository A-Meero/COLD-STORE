import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierListPageRoutingModule } from './supplier-list-routing.module';

import { SupplierListPage } from './supplier-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierListPageRoutingModule
  ],
  declarations: [SupplierListPage]
})
export class SupplierListPageModule {}
