import { NgModule, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { WeighingListComponent } from './weighing-list/weighing-list.component';
import { WeighingDetailComponent } from './weighing-detail/weighing-detail.component';
import { WeighingAxleComponent } from './weighing-axle/weighing-axle.component';

const weighingRoutes: Routes = [
    {   // Lista de pesagens
        path:  'weighing', 
        component: WeighingListComponent
    },
    {   
        path: 'weighing/:id',
        component: WeighingDetailComponent
    },
    {   
        path: 'weighing/:id/axle',
        component: WeighingAxleComponent
    }                             
]

@NgModule({
    imports: [RouterModule.forChild(weighingRoutes)],
    exports: [RouterModule]
})
export class WeighingRoutingModule{}