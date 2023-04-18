import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTradeShiftsPageRoutingModule } from './employee-trade-shifts-routing.module';

import { EmployeeTradeShiftsPage } from './employee-trade-shifts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTradeShiftsPageRoutingModule
  ],
  declarations: [EmployeeTradeShiftsPage]
})
export class EmployeeTradeShiftsPageModule {}
