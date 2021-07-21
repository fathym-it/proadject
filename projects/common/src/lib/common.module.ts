import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonComponent } from './common.component';
import { ForecastThumbnailComponent } from './elements/forecast-thumbnail/forecast-thumbnail.component';
import { PointForecastComponent } from './elements/point-forecast/point-forecast.component';
import { RouteForecastComponent } from './elements/route-forecast/route-forecast.component';
import { SplashScreenComponent } from './elements/splash-screen/splash-screen.component';
import { MaterialModule } from './material.module';
import { ProadjectService } from './services/proadject.service';



@NgModule({
  declarations: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent,
    SplashScreenComponent,
    ForecastThumbnailComponent

  ],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonComponent,
    PointForecastComponent,
    RouteForecastComponent,
    SplashScreenComponent,
    ForecastThumbnailComponent
  ],
  providers: [
    ProadjectService
  ]
})
export class CommonModule { }
