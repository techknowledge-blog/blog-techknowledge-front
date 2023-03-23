import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionDialogComponent } from './under-construction-dialog.component';

describe('UnderConstructionDialogComponent', () => {
  let component: UnderConstructionDialogComponent;
  let fixture: ComponentFixture<UnderConstructionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstructionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
