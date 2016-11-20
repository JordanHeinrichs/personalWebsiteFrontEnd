import { Injectable } from '@angular/core';

import { AppSettings } from './../app.settings';
import { BlogUrlRouteService } from './../blog/blog-url-route.service';

@Injectable()
export class HobbiesUrlRouteService implements BlogUrlRouteService {
  blogList(): string {
    return AppSettings.API_ENDPOINT + 'hobbies/';
  };

  blog(): string {
    return AppSettings.API_ENDPOINT + 'hobby/';
  }
}
