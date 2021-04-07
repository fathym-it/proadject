import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class ProadjectRouteForecastElementState {}

export class ProadjectRouteForecastContext extends LCUElementContext<ProadjectRouteForecastElementState> {}

export const SELECTOR_PROADJECT_ROUTE_FORECAST_ELEMENT = 'proadject-route-forecast-element';

@Component({
  selector: SELECTOR_PROADJECT_ROUTE_FORECAST_ELEMENT,
  templateUrl: './route-forecast.component.html',
  styleUrls: ['./route-forecast.component.scss']
})
export class ProadjectRouteForecastElementComponent extends LcuElementComponent<ProadjectRouteForecastContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
