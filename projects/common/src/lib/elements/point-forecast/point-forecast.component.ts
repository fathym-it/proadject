import { Component, Input, OnInit } from '@angular/core';
import { ProadjectService } from '../../services/proadject.service';
import { ProadjectState, UsersSettings } from '../../state/proadject.state';

@Component({
  selector: 'lcu-point-forecast',
  templateUrl: './point-forecast.component.html',
  styleUrls: ['./point-forecast.component.scss']
})
export class PointForecastComponent implements OnInit {

  @Input('state')
  public State?: ProadjectState;

  constructor(protected proadjectSvc: ProadjectService) { }

  ngOnInit(): void {

    this.getUsersSettings();
    // console.log("State = ", this.State);
    this.getCurrentLocation();

  }

  protected getUsersSettings(){
    if(this.State){
      this.State.Loading = true;
    }
    this.proadjectSvc.GetUsersSettings().subscribe(resp => {
      this.State.UsersSettings = <UsersSettings> resp;
      console.log("User Settings: ", this.State.UsersSettings)
    });
  }

  protected getCurrentLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else { 
        // x.innerHTML = "Geolocation is not supported by this browser.";
      }
    
  }

  protected showPosition(position: any){
    console.log("Position: ", position);
    this.State.CurrentLocation.Latitude = position.coords.latitude;
    this.State.CurrentLocation.Longitude = position.coords.longitude;
    console.log("State: ", this.State);

  }

}
