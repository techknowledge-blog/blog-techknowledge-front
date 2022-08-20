import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardRenderComponent } from './posts-card-render.component';

describe('PostsCardRenderComponent', () => {
  let component: PostsCardRenderComponent;
  let fixture: ComponentFixture<PostsCardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCardRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsCardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
