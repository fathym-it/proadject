import { Component, Input, OnInit } from '@angular/core';
import { ProadjectState } from '../../state/proadject.state';

@Component({
  selector: 'lcu-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  @Input('state')
  public State?: ProadjectState;

  public LastUpdated: string;

  constructor() { }

  ngOnInit(): void {
    console.log("STATE: ", this.State);
    this.getCurrentLocation();

    if(this.State.CurrentForecast.LastUpdated){
      this.LastUpdated = this.calcLastUpdated(this.State.CurrentForecast.LastUpdated);
    }
  }

  protected getCurrentLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      // x.innerHTML = "Geolocation is not supported by this browser.";
    }
  
}

protected showPosition(position){
  console.log("Position: ", position);
  this.State.CurrentLocation.Latitude = position.coords.latitude;
  this.State.CurrentLocation.Longitude = position.coords.longitude;
  // console.log("State: ", this.State);

}

protected calcLastUpdated(date: Date): string{
  let elapsed = (new Date().getTime() - date.getTime())/1000;
  let unit = "secs";


  if (elapsed > 60){
    elapsed/=60;
    unit = "min";
  }
  else if(elapsed < 1){
    return "Now";
  }

  return elapsed.toString() + unit;
}

}
