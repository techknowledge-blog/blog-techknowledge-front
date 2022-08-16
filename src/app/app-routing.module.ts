import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home-screen/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./modules/about-screen/about.module').then(
        (module) => module.AboutModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts-screen/posts-screen.module').then(
        (module) => module.PostsScreenModule
      ),
  },
  {
    path: 'insight-of-days',
    loadChildren: () =>
      import('./modules/insight-of-days-screen/insight-of-days.module').then(
        (module) => module.InsightOfDaysModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
