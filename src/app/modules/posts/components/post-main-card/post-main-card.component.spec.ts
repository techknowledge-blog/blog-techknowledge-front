import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMainCardComponent } from './post-main-card.component';

describe('PostMainCardComponent', () => {
  let component: PostMainCardComponent;
  let fixture: ComponentFixture<PostMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMainCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
