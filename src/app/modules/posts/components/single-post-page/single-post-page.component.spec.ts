import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostPageComponent } from './single-post-page.component';

describe('SinglePostPageComponent', () => {
  let component: SinglePostPageComponent;
  let fixture: ComponentFixture<SinglePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePostPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
