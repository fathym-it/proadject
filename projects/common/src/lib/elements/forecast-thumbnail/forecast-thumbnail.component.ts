import { Component, Input, OnInit } from '@angular/core';
import { ForecastInfo } from '../../state/proadject.state';

@Component({
  selector: 'lcu-forecast-thumbnail',
  templateUrl: './forecast-thumbnail.component.html',
  styleUrls: ['./forecast-thumbnail.component.scss']
})
export class ForecastThumbnailComponent implements OnInit {

  @Input('forecast')
  public Forecast: ForecastInfo;

  /**
   * Type either day or hourly will be used to determine how to parse the date and assign title to thumbnail
   */
  @Input('type')
  public Type: string;

  public Title: string;

  public PrecipPercentage: string;

  constructor() { }

  ngOnInit(): void {
    if(this.Forecast.Date && this.Type){
      this.determineTitle(this.Forecast.Date, this.Type);
    }
    if(this.Forecast.PrecipChance){
      this.PrecipPercentage = this.convertToPercentage(this.Forecast.PrecipChance);
    }
    
  }

  protected determineTitle(date: Date, type: String){
    if(type.toLowerCase() === "day"){
      this.Title = this.determineDayOfWeek(date.getDay());
    }
    else if(type.toLowerCase() === "hour"){
      this.Title = date.getHours().toString();
    }
    else{
      console.log("Invalid title type");
      this.Title = null;
    }
  }

  protected determineDayOfWeek(day: number): string{
    let dayOfWeek: string;
    switch(day) {
      case 0:
        dayOfWeek = "Sun";
        break;

     case 1:
        dayOfWeek = "Mon";
        break;

      case 2:
        dayOfWeek = "Tue";
        break;

      case 3:
        dayOfWeek = "Wed";
        break;

      case 4:
        dayOfWeek = "Thu";
        break;

      case 5:
        dayOfWeek = "Fri";
        break;

      case 6:
        dayOfWeek = "Sat";
        break;
        
      default:
        dayOfWeek = null;
    }
    return dayOfWeek;
  }

  protected convertToPercentage(num: number): string{
    let percentage: string;
    percentage = (num * 100).toString() + "%";
    return percentage;
  }

  

}
