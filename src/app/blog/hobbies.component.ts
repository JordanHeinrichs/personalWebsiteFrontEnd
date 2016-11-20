import { Component } from '@angular/core';

import { BlogUrlRouteService } from './blog-url-route.service';
import { HobbiesUrlRouteService } from './hobbies-url-route.service';

@Component({
  templateUrl: './hobbies.component.html',
  providers: [{ provide: BlogUrlRouteService, useClass: HobbiesUrlRouteService }]
})
export class HobbiesComponent {
}
