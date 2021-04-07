import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { ProadjectPointForecastElementComponent } from './elements/point-forecast/point-forecast.component';
import { ProadjectRouteForecastElementComponent } from './elements/route-forecast/route-forecast.component';

@NgModule({
  declarations: [
    LcuComponent,
    LcuDirective,
    ProadjectPointForecastElementComponent,
    ProadjectRouteForecastElementComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [],
  entryComponents: []
})
export class ProadjectModule {
  static forRoot(): ModuleWithProviders<ProadjectModule> {
    return {
      ngModule: ProadjectModule,
      providers: [LcuService]
    };
  }
}
