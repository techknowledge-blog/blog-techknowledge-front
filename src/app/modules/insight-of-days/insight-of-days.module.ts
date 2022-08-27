import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightOfDaysRoutingModule } from './insight-of-days-routing.module';
import { InsightOfDaysComponent } from './insight-of-days.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InsightOfDaysComponent],
  imports: [CommonModule, InsightOfDaysRoutingModule, SharedModule],
})
export class InsightOfDaysModule {}
