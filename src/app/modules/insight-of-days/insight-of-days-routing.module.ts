import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightOfDaysComponent } from './insight-of-days.component';

const routes: Routes = [
  {
    path: '',
    component: InsightOfDaysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightOfDaysRoutingModule {}
