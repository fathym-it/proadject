import { Component, Input, OnInit } from '@angular/core';
import { ProadjectService } from '../../services/proadject.service';
import { ProadjectState, UsersSettings } from '../../state/proadject.state';

@Component({
  selector: 'lcu-point-forecast',
  templateUrl: './point-forecast.component.html',
  styleUrls: ['./point-forecast.component.css']
})
export class PointForecastComponent implements OnInit {

  @Input('state')
  public State?: ProadjectState;

  constructor(protected proadjectSvc: ProadjectService) { }

  ngOnInit(): void {

    this.getUsersSettings();
    console.log("State = ", this.State);

  }

  protected getUsersSettings(){
    if(this.State){
      this.State.Loading = true;
    }
    this.proadjectSvc.GetUsersSettings().subscribe(resp => {
      this.State.UsersSettings = <UsersSettings> resp;
    });
  }

}
