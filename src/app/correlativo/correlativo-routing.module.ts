import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrelativoComponent } from './correlativo.component';
import { GridCorrelativoComponent } from './grid-correlativo/grid-correlativo.component';


const correlativoRoutes: Routes = [
   {
    path: '',
    component: CorrelativoComponent,
    children: [
      {
        path: '',
        component: GridCorrelativoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(correlativoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CorrelativoRoutingModule { }
