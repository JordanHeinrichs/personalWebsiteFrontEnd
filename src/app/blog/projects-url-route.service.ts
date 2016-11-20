import { Injectable } from '@angular/core';

import { AppSettings } from './../app.settings';
import { BlogUrlRouteService } from './../blog/blog-url-route.service';

@Injectable()
export class ProjectsUrlRouteService implements BlogUrlRouteService {
  blogList(): string {
    return AppSettings.API_ENDPOINT + 'projects/';
  };

  blog(): string {
    return AppSettings.API_ENDPOINT + 'project/';
  }
}
