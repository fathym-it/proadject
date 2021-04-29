import { Component, OnInit } from '@angular/core';
import { ProadjectPointForecastContext } from 'projects/common/src/lib/elements/point-forecast/point-forecast.component';

@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Context: ProadjectPointForecastContext;

  constructor() {
    this.Context = {
        State: {}
    };
  }

  public ngOnInit(): void { }

}
