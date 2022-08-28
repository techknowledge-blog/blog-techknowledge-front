import { mockedPosts } from './../../../shared/mocks/post-mocks';
import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import IPost from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-card-render',
  templateUrl: './posts-card-render.component.html',
  styleUrls: ['./posts-card-render.component.scss'],
})
export class PostsCardRenderComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  public posts: IPost[] = mockedPosts;
  ngOnInit(): void {
    // this.getFeaturedPosts();
  }

  getFeaturedPosts(): void {
    this.postsService
      .getFeaturedPosts()
      .subscribe((posts: IPost[]) => (this.posts = posts));
  }
}
