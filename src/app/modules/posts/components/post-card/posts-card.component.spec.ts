<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './posts-card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
=======
import IPost from '../../interfaces/post.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PostCardComponent } from './posts-card.component';

const mockPost: IPost = {
  id: 1,
  title: 'random title',
  category: 'random category',
  subtitle: 'random subtitle',
  content: 'random content',
  previewContent: 'random preview content',
  slug: 'random slug',
  previewImagePath: 'random preview image',
  createdAt: 'new Date()',
  updatedAt: 'new Date()',
};

describe('CardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.post = mockPost;
>>>>>>> 7020cc6d264c952165e842c39f920e35d691a320
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
=======

  fit('should have a title from post-card component', () => {
    const postTitle = 'Mocked Post Title';

    let { post } = component;
    post.title = postTitle;

    fixture.detectChanges();

    const elementWithTitle = fixture.debugElement.query(
      By.css('mat-card-title')
    ).nativeElement as HTMLSpanElement;

    expect(elementWithTitle.textContent).toEqual(postTitle);
  });
>>>>>>> 7020cc6d264c952165e842c39f920e35d691a320
});
