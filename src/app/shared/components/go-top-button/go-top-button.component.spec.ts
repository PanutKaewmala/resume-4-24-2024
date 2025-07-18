import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopButtonComponent } from './go-top-button.component';

describe('GoTopButtonComponent', () => {
  let component: GoTopButtonComponent;
  let fixture: ComponentFixture<GoTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoTopButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
