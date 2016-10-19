import { AppSettings } from './../app.settings';
import { BlogUrlService } from './../blog-content';

export class HobbiesUrlService implements BlogUrlService {
   blogList(): string {
      return AppSettings.API_ENDPOINT + 'hobbies/';
   };

   blog(): string {
      return AppSettings.API_ENDPOINT + 'hobby/';
   }
}
