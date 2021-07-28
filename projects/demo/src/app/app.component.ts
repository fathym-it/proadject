import { Component, OnInit } from '@angular/core';
import {
  PalettePickerService,
  ThemeBuilderConstants,
  ThemeBuilderService,
  ThemePickerModel
} from '@lowcodeunit/lcu-theme-builder-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'demo';

  public ThumbnailType: string = 'day';

  // public State: ProadjectState;
  public State: any;

  constructor(
    protected themeBuilderService: ThemeBuilderService,
    protected palettePickerService: PalettePickerService){

    this.State = {
      CurrentLocation:{
        Latitude: 40.5853,
        Longitude: 105.0844,
        City: 'Fort Collins',
        State: 'CO',
        County: 'Larimer',
        Country:'US',
        ZipCode: '80521',
      },
      UsersSettings:{
        FavoriteLocations:[],
        FavoriteRoutes:[],
        Tier:'starter',
      },
      CurrentForecast:{
        Temperature: 89,
        TempHigh: 92,
        TempLow: 65,
        TempUnit: 'Fahrenheit',
        FeelsLike: 102,
        WindSpeed: '5 mph',
        WindDirection: 'S',
        WindIcon: 'near_me',
        Humidity: .2,
        BarometricPressure: 29.99,
        UVIndex: 9,
        WeatherCondition: 'Sunny',
        WeatherIcon: 'brightness_5',
        PrecipChance: .2,
        PrecipIcon: 'ac_unit',
        DewPoint: 45,
        Date: new Date(),
        LastUpdated: new Date()
      },
      Loading: false
    };
  }

  public ngOnInit(): void {
    // setTimeout(() => {
      this.themeBuilderService.MaterialTheme = 'https://www.iot-ensemble.com/assets/theming/theming.scss';
      this.setupThemes();
    // }, 2000);
 
  }

  public doSomething(): void{
    console.log('worked');
  }

    /**
     * Setup array of themes
     */
    protected setupThemes(): void {
      const themes: Array<ThemePickerModel> = [
        new ThemePickerModel(
          {
            ID: 'Fathym Brand',
            Primary: ThemeBuilderConstants.document.getPropertyValue('--initial-primary'),
            Accent: ThemeBuilderConstants.document.getPropertyValue('--initial-accent'),
            Warn: ThemeBuilderConstants.document.getPropertyValue('--initial-warn')
          }
        ),
        new ThemePickerModel(
          {
            ID: 'Yellow', 
            Primary: '#ffcc11',
            Accent: '#06a5ff',
            Warn: '#990000'
          }
        ),
        new ThemePickerModel(
          {
            ID: 'Pink',
            Primary: '#a83271',
            Accent: '#6103ff',
            Warn: '#b9f013'
          }
        )
      ];

      this.themeBuilderService.SetThemes(themes);
    }

}
