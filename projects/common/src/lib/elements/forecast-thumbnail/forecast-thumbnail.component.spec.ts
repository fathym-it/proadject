import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastThumbnailComponent } from './forecast-thumbnail.component';

describe('ForecastThumbnailComponent', () => {
  let component: ForecastThumbnailComponent;
  let fixture: ComponentFixture<ForecastThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
