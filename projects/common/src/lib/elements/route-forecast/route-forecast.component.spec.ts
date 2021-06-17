import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteForecastComponent } from './route-forecast.component';

describe('RouteForecastComponent', () => {
  let component: RouteForecastComponent;
  let fixture: ComponentFixture<RouteForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
