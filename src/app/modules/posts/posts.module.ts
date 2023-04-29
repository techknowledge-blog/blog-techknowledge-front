import { MatDividerModule } from '@angular/material/divider';
import { PostsService } from './posts.service';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsCardRenderComponent } from './components/posts-card-render/posts-card-render.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostCardComponent } from './components/post-card/posts-card.component';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { PostMainCardComponent } from './components/post-main-card/post-main-card.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostsCardRenderComponent,
    SinglePostPageComponent,
    PostsPageComponent,
    PostMainCardComponent,
  ],
  providers: [PostsService],
  imports: [CommonModule, SharedModule, PostsRoutingModule, MatDividerModule],
  exports: [PostsComponent, PostCardComponent, PostsCardRenderComponent],
})
export class PostsModule {}
