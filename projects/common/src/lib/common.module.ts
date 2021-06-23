import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { PointForecastComponent } from './elements/point-forecast/point-forecast.component';
import { RouteForecastComponent } from './elements/route-forecast/route-forecast.component';
import { MaterialModule } from './material.module';
import { ProadjectService } from './services/proadject.service';



@NgModule({
  declarations: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent
  ],
  providers: [
    ProadjectService
  ]
})
export class CommonModule { }
