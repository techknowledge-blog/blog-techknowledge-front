import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsScreenComponent } from './posts-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PostsScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsScreenRoutingModule {}
