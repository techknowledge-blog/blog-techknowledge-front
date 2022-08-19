import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./modules/about/about.module').then(
        (module) => module.AboutModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then(
        (module) => module.PostsModule
      ),
  },
  {
    path: 'insight-of-days',
    loadChildren: () =>
      import('./modules/insight-of-days/insight-of-days.module').then(
        (module) => module.InsightOfDaysModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
