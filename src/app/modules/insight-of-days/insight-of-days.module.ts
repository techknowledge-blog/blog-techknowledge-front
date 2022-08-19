import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightOfDaysRoutingModule } from './insight-of-days-routing.module';
import { InsightOfDaysComponent } from './insight-of-days.component';

@NgModule({
  declarations: [InsightOfDaysComponent],
  imports: [CommonModule, InsightOfDaysRoutingModule],
})
export class InsightOfDaysModule {}
