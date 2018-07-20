import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OficinaRoutingModule } from './oficina-routing.module';
import { OficinaService } from './oficina.service';
import { PanelModule, DataTableModule, DropdownModule, ButtonModule, GrowlModule, DialogModule,
  ConfirmDialogModule, InputTextModule } from 'primeng/primeng';
import { OficinaComponent } from './oficina.component';
import { GridOficinaComponent } from './grid-oficina/grid-oficina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OficinaRoutingModule,
    PanelModule,
    DataTableModule,
    DropdownModule,
    ButtonModule,
    GrowlModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule
  ],
  declarations: [
    OficinaComponent,
    GridOficinaComponent
  ],
  providers: [
    OficinaService
  ]
})

export class OficinaModule { }
