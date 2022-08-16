import { InsightOfDaysModule } from './modules/insight-of-days-screen/insight-of-days.module';
import { PostsScreenModule } from './modules/posts-screen/posts-screen.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home-screen/home.module';
import { AboutModule } from './modules/about-screen/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    PostsScreenModule,
    InsightOfDaysModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
