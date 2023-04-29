import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import IPost from './interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getFeaturedPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.apiUrl + '/posts');
  }

  //while data is mocked, the return need to be a array with the target object
  getPostBySlug(slug: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.apiUrl + '/posts?slug=' + slug);
  }

  getAllPublishedPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.apiUrl + '/feed');
  }
}
