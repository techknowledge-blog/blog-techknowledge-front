import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import IPost from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getAllPublishedPosts();
  }

  getAllPublishedPosts(): void {
    this.postsService.getAllPublishedPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
