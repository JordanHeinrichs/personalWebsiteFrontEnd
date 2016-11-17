import { AppSettings } from './../app.settings';
import { BlogUrlService } from './../blog-content';

export class ProjectsUrlService implements BlogUrlService {
  blogList(): string {
    return AppSettings.API_ENDPOINT + 'projects/';
  };

  blog(): string {
    return AppSettings.API_ENDPOINT + 'project/';
  }
}
