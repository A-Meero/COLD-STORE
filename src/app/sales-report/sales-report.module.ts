import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesReportPageRoutingModule } from './sales-report-routing.module';

import { SalesReportPage } from './sales-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesReportPageRoutingModule
  ],
  declarations: [SalesReportPage]
})
export class SalesReportPageModule {}
