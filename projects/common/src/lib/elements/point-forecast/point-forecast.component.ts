import { 
  Component, 
  OnInit, 
  Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
} from '@lcu/common';
import { UserProadjectStateContext } from '../../state/user-proadject/user-proadject-state.context';
import { UserProadjectState } from '../../state/user-proadject/user-proadject.state';

// export class ProadjectPointForecastElementState {}

export class ProadjectPointForecastContext extends LCUElementContext<UserProadjectState> {

}

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

  protected userProadjectStateCtx: UserProadjectStateContext;


  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
    
    this.userProadjectStateCtx.Context.subscribe((state: any) => {
      this.Context.State = state;

      if (this.Context.State) {
        // this.stateChanged();
      }

    });
  }

  //  API Methods

  //  Helpers
}
