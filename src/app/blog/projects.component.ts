import { Component } from '@angular/core';

import { BlogUrlRouteService } from './blog-url-route.service';
import { ProjectsUrlRouteService } from './projects-url-route.service';

@Component({
  templateUrl: './projects.component.html',
  providers: [{ provide: BlogUrlRouteService, useClass: ProjectsUrlRouteService }]
})
export class ProjectsComponent {
}
