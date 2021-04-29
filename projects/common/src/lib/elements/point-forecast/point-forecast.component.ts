import { 
  Component, 
  OnInit, 
  Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
} from '@lcu/common';

export class ProadjectPointForecastElementState {}

export class ProadjectPointForecastContext extends LCUElementContext<ProadjectPointForecastElementState> {}

export const SELECTOR_PROADJECT_POINT_FORECAST_ELEMENT = 'proadject-point-forecast-element';

@Component({
  selector: SELECTOR_PROADJECT_POINT_FORECAST_ELEMENT,
  templateUrl: './point-forecast.component.html',
  styleUrls: ['./point-forecast.component.scss']
})
export class ProadjectPointForecastElementComponent 
  extends LcuElementComponent<ProadjectPointForecastContext> 
  implements OnInit {
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
