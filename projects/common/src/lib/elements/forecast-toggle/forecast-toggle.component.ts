import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcu-forecast-toggle',
  templateUrl: './forecast-toggle.component.html',
  styleUrls: ['./forecast-toggle.component.scss']
})
export class ForecastToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public HourToggleSelected(){
    console.log("toggle Value: ", "hour")
  }
  public WeekToggleSelected(){
    console.log("toggle Value: ", "Week")
  }


}
