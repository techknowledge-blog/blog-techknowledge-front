import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsScreenRoutingModule } from './posts-screen-routing.module';
import { PostsScreenComponent } from './posts-screen.component';

@NgModule({
  declarations: [PostsScreenComponent],
  imports: [CommonModule, PostsScreenRoutingModule],
})
export class PostsScreenModule {}
