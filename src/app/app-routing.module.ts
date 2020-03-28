import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home/home.component'
import { WeighingListComponent } from './component/weighing/weighing-list/weighing-list.component'
import { WeighingDetailComponent } from './component/weighing/weighing-detail/weighing-detail.component'

const routes: Routes = [
  {
    path: 'weighing',
    component: WeighingListComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weighing/:id',
    component: WeighingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
