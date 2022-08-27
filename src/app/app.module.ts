import { InsightOfDaysModule } from './modules/insight-of-days/insight-of-days.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsModule } from './modules/posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    PostsModule,
    SharedModule,
    InsightOfDaysModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
