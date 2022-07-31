import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightOfDaysComponent } from './insight-of-days.component';

describe('InsightOfDaysComponent', () => {
  let component: InsightOfDaysComponent;
  let fixture: ComponentFixture<InsightOfDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightOfDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightOfDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
