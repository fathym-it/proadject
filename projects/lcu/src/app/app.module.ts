import { ProadjectRouteForecastElementComponent } from '@fathym-it/proadject-common';
import { SELECTOR_PROADJECT_ROUTE_FORECAST_ELEMENT } from '@fathym-it/proadject-common';
import { DoBootstrap } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ProadjectPointForecastElementComponent } from '@fathym-it/proadject-common';
import { SELECTOR_PROADJECT_POINT_FORECAST_ELEMENT } from '@fathym-it/proadject-common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: []
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const pointForecast = createCustomElement(ProadjectPointForecastElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_PROADJECT_POINT_FORECAST_ELEMENT, pointForecast);
	
		const routeForecast = createCustomElement(ProadjectRouteForecastElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_PROADJECT_ROUTE_FORECAST_ELEMENT, routeForecast);
	}
}
