import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IPost from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-card-render',
  templateUrl: './posts-card-render.component.html',
  styleUrls: ['./posts-card-render.component.scss'],
})
export class PostsCardRenderComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:3000';

  public posts: IPost[] = [];

  ngOnInit(): void {
    this.getFeaturedPosts();
  }

  getFeaturedPosts(): void {
    this.http
      .get<IPost[]>(this.API_URL + '/posts')
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }
}
