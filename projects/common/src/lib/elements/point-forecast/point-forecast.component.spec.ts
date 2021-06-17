import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointForecastComponent } from './point-forecast.component';

describe('PointForecastComponent', () => {
  let component: PointForecastComponent;
  let fixture: ComponentFixture<PointForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
