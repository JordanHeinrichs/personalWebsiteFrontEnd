import { Component  } from '@angular/core';
import { HobbiesUrlService } from './hobbies-url-route.service';
import { BlogUrlService } from './../blog-content';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.template.html',
  providers: [{provide: BlogUrlService, useClass: HobbiesUrlService}]
})
export class Hobbies {
}
