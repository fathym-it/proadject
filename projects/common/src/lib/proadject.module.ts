import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';

import { MouseMoveDirective } from './directives/mouse-move.directive';
import { ForecastToggleComponent } from './elements/forecast-toggle/forecast-toggle.component';
import { ForecastThumbnailComponent } from './elements/forecast-thumbnail/forecast-thumbnail.component';
import { SplashScreenComponent } from './elements/splash-screen/splash-screen.component';
import { RouteForecastComponent } from './elements/route-forecast/route-forecast.component';
import { PointForecastComponent } from './elements/point-forecast/point-forecast.component';

@NgModule({
  declarations: [
    MouseMoveDirective,
    PointForecastComponent,
    RouteForecastComponent,
    SplashScreenComponent,
    ForecastThumbnailComponent,
    ForecastToggleComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    PointForecastComponent,
    RouteForecastComponent,
    SplashScreenComponent,
    ForecastThumbnailComponent,
    ForecastToggleComponent
  ],
  entryComponents: [
   
  ]
})
export class ProadjectModule {
  static forRoot(): ModuleWithProviders<ProadjectModule> {
    return {
      ngModule: ProadjectModule,
      providers: []
    };
  }
}
