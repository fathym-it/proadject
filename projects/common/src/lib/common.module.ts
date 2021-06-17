import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { PointForecastComponent } from './elements/point-forecast/point-forecast.component';
import { RouteForecastComponent } from './elements/route-forecast/route-forecast.component';



@NgModule({
  declarations: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent
  ],
  imports: [
  ],
  exports: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent
  ],
  entryComponents: [
    PointForecastComponent,
    RouteForecastComponent
  ]
})
export class CommonModule { }
