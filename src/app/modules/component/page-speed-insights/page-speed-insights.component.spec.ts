import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpeedInsightsComponent } from './page-speed-insights.component';

describe('PageSpeedInsightsComponent', () => {
  let component: PageSpeedInsightsComponent;
  let fixture: ComponentFixture<PageSpeedInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSpeedInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSpeedInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
