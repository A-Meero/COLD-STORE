import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerViewPageRoutingModule } from './owner-view-routing.module';

import { OwnerViewPage } from './owner-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerViewPageRoutingModule
  ],
  declarations: [OwnerViewPage]
})
export class OwnerViewPageModule {}
