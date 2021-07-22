import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor() {}


  // Lifecycle hooks
  public ngOnDestroy(): void {


  }

  public ngOnInit(): void {
  }
  
}
