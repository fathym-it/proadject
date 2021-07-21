import { Component } from '@angular/core';
import { DailyForecast, ProadjectState } from 'projects/common/src/lib/state/proadject.state';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  public ThumbnailType: string = "day";

  public State: ProadjectState;

  constructor(){
    this.State = {
      CurrentLocation:{
        Latitude: 40.5853,
        Longitude: 105.0844,
        City: "Fort Collins",
        State: "CO",
        County: "Larimer",
        Country:"US",
        ZipCode: "80521",
      },
      UsersSettings:{
        FavoriteLocations:[],
        FavoriteRoutes:[],
        Tier:"starter",
      },
      CurrentForecast:{
        Temperature: 89,
        TempHigh: 92,
        TempLow: 65,
        TempUnit: "Fahrenheit",
        FeelsLike: 102,
        WindSpeed: "5 mph",
        WindDirection: "S",
        WindIcon: 'near_me',
        Humidity: .2,
        BarometricPressure: 29.99,
        UVIndex: 9,
        WeatherCondition: "Sunny",
        WeatherIcon: "brightness_5",
        PrecipChance: .2,
        PrecipIcon: "ac_unit",
        DewPoint: 45,
        Date: new Date(),
        LastUpdated: new Date()
      },
      Loading: false
      


    };
  }




}
