import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDialogComponent } from './social-dialog.component';

describe('SocialDialogComponent', () => {
  let component: SocialDialogComponent;
  let fixture: ComponentFixture<SocialDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
