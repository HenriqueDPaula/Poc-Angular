import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WeighingDetailComponent } from './weighing-detail/weighing-detail.component'
import { WeighingListComponent } from './weighing-list/weighing-list.component'
import { WeighingService } from './service/weighing.service';
import { WeighingAxleComponent } from './weighing-axle/weighing-axle.component';
import { WeighingRoutingModule } from './weighing.routing.module';

@NgModule({
  declarations: [
    WeighingDetailComponent,
    WeighingListComponent,
    WeighingAxleComponent
  ],
  imports: [
    CommonModule,
    WeighingRoutingModule,
    RouterModule
  ],
  exports: [],
  providers: [WeighingService]
})
export class WeighingModule { }
