import { PostsService } from './../../posts.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import IPost from '../../interfaces/post.interface';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SinglePostPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  public slug!: string;
  public post: IPost | undefined;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.getSlugByRoute();
    this.getPostBySlug();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSlugByRoute(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.slug = params['slug'];
      console.log(this.slug);
    });
  }

  getPostBySlug(): void {
    this.postsService.getPostBySlug(this.slug).subscribe((posts: IPost[]) => {
      this.post = posts[0];
      console.log(this.post);
    });
  }
}
