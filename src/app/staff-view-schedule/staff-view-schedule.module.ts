import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffViewSchedulePageRoutingModule } from './staff-view-schedule-routing.module';

import { StaffViewSchedulePage } from './staff-view-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffViewSchedulePageRoutingModule
  ],
  declarations: [StaffViewSchedulePage]
})
export class StaffViewSchedulePageModule {}
