import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, SharedModule],
  exports: [PostsComponent],
})
export class PostsModule {}
