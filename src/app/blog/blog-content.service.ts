import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ItemChoice } from './item-selector/item-choice';
import { BlogUrlRouteService } from './blog-url-route.service';

@Injectable()
export class BlogContentService {
  constructor(private http: Http, private blogUrl: BlogUrlRouteService) { }

  blogList(): Promise<ItemChoice[]> {
    return this.http
      .get(this.blogUrl.blogList())
      .map((res: Response) => {
        const itemChoices: ItemChoice[] = [];
        const json = res.json();
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
      .get(this.blogUrl.blog() + name)
      .map((res: Response) => res.text())
      .toPromise();
  }
}
