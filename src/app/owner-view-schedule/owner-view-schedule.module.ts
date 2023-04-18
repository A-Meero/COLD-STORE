import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerViewSchedulePageRoutingModule } from './owner-view-schedule-routing.module';

import { OwnerViewSchedulePage } from './owner-view-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerViewSchedulePageRoutingModule
  ],
  declarations: [OwnerViewSchedulePage]
})
export class OwnerViewSchedulePageModule {}
