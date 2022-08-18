import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/modules/posts/interfaces/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:3000';

  public isHovering: boolean = false;

  public posts: IPost[] = [];

  ngOnInit(): void {
    this.getFeaturedPosts();

    console.log(this.posts.length);
  }

  getFeaturedPosts(): void {
    this.http
      .get<IPost[]>(this.API_URL + '/posts')
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }
}
