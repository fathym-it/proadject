import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastToggleComponent } from './forecast-toggle.component';

describe('ForecastToggleComponent', () => {
  let component: ForecastToggleComponent;
  let fixture: ComponentFixture<ForecastToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
