import { PostsCardRenderComponent } from './components/posts-card-render/posts-card-render.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostCardComponent } from './components/post-card/posts-card.component';

@NgModule({
  declarations: [PostsComponent, PostCardComponent, PostsCardRenderComponent],
  imports: [CommonModule, SharedModule],
  exports: [PostsComponent, PostCardComponent, PostsCardRenderComponent],
})
export class PostsModule {}
