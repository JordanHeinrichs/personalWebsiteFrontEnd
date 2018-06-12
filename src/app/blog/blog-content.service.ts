import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemChoice } from './item-selector/item-choice';
import { BlogUrlRouteService } from './blog-url-route.service';

@Injectable()
export class BlogContentService {
  constructor(private http: HttpClient, private blogUrl: BlogUrlRouteService) { }

  blogList(): Promise<ItemChoice[]> {
    return this.http
      .get(this.blogUrl.blogList())
      .map((json: Object) => {
        const itemChoices: ItemChoice[] = [];
        Object.keys(json).forEach((key) => {
          itemChoices.push({
            name: key,
            title: json[key].title,
            src: json[key].src
          });
        });
        return itemChoices;
      })
      .toPromise();
  };

  blog(name: string): Promise<string> {
    return this.http
      .get(this.blogUrl.blog() + name, {responseType: 'text'})
      .toPromise();
  }
}
