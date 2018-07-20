import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrelativoRoutingModule } from './correlativo-routing.module';
import { CorrelativoService } from './correlativo.service';
import { CorrelativoComponent } from './correlativo.component';
import { GridCorrelativoComponent } from './grid-correlativo/grid-correlativo.component';
import { PanelModule, DataTableModule, DropdownModule, ButtonModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CorrelativoRoutingModule,
    PanelModule,
    DataTableModule,
    DropdownModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [
    CorrelativoComponent,
    GridCorrelativoComponent
  ],
  providers: [
    CorrelativoService
  ]
})
export class CorrelativoModule { }
