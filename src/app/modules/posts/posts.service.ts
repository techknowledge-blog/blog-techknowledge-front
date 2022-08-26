import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IPost from './interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:3000';

  getFeaturedPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL + '/posts');
  }

  //while data is mocked, the return need to be a array with the target object
  getPostBySlug(slug: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL + '/posts?slug=' + slug);
  }
}
