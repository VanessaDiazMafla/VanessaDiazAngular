import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistoryMenuComponent } from './history-menu/history-menu.component';


@NgModule({
  declarations: [
    HistoryMenuComponent
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule
  ]
})
export class HistorialModule { }
