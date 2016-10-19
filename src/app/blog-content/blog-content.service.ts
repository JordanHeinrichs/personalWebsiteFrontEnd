import { Injectable, Inject }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { ItemChoice } from './../itemselector';
import { Observable } from 'rxjs/Rx';
import { BlogUrlService } from './blog-url-route.service';

@Injectable()
export class BlogContentService {
   constructor(private http: Http, @Inject(BlogUrlService) private blogUrl: BlogUrlService) {}

   blogList(): Promise<ItemChoice[]> {
      return this.http
         .get(this.blogUrl.blogList())
         .toPromise()
         .then(res => res.json());
   };

   blog(name: string): Promise<string> {
      return this.http
         .get(this.blogUrl.blog() + name)
         .toPromise()
         .then(res => res.json());
   }
}
