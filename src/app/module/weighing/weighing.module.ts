import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeighingDetailComponent } from '../../component/weighing/weighing-detail/weighing-detail.component'
import { WeighingListComponent } from '../../component/weighing/weighing-list/weighing-list.component'

@NgModule({
  declarations: [
    WeighingDetailComponent,
    WeighingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class WeighingModule { }
