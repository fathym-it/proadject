import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { ProadjectRouteForecastElementComponent } from './elements/route-forecast/route-forecast.component';
import { ProadjectPointForecastElementComponent } from './elements/point-forecast/point-forecast.component';
import { AppHostModule } from '@lowcodeunit/app-host-common';


@NgModule({
  declarations: [
    LcuComponent,
    LcuDirective,
    ProadjectRouteForecastElementComponent,
    ProadjectPointForecastElementComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppHostModule
  ],
  exports: [
    LcuComponent,
    LcuDirective,
    AppHostModule
  ],
  entryComponents: [
    ProadjectPointForecastElementComponent,
    ProadjectRouteForecastElementComponent
  ]
})
export class ProadjectModule {
  static forRoot(): ModuleWithProviders<ProadjectModule> {
    return {
      ngModule: ProadjectModule,
      providers: [LcuService]
    };
  }
}
