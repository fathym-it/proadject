import { Component, Input, OnInit } from '@angular/core';
import { ForecastInfo } from '../../state/proadject.state';

@Component({
  selector: 'lcu-multi-day-forecast',
  templateUrl: './multi-day-forecast.component.html',
  styleUrls: ['./multi-day-forecast.component.scss']
})
export class MultiDayForecastComponent implements OnInit {

  @Input("forecasts")
  public Forecasts: Array<ForecastInfo>;

  public ThumbnailType: string = "day";

  constructor() { }

  ngOnInit(): void {
  }

}
