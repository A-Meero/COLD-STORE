import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerSalesReportPageRoutingModule } from './owner-sales-report-routing.module';

import { OwnerSalesReportPage } from './owner-sales-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerSalesReportPageRoutingModule
  ],
  declarations: [OwnerSalesReportPage]
})
export class OwnerSalesReportPageModule {}
