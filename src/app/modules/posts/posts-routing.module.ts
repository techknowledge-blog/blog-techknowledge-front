import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsPageComponent,
      },
      {
        path: ':slug',
        component: SinglePostPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
