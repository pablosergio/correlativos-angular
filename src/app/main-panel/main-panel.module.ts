import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelRoutingModule } from './main-panel-routing.module';
import { PanelMenuModule, MenubarModule, PanelModule, DropdownModule, ButtonModule,
  InputTextModule, DataTableModule } from 'primeng/primeng';
import { MainPanelComponent } from './main-panel.component';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule,
    MainPanelRoutingModule,
    PanelMenuModule,
    PanelModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    DataTableModule
  ],
  declarations: [
    MainPanelComponent
  ],
  providers: [
    JwtHelper
  ]
})
export class MainPanelModule { }
