import { Component } from '@angular/core';
import { ProjectsUrlService } from './projects-url-route.service';
import { BlogUrlService } from './../blog-content';

@Component({
   selector: 'projects',
   templateUrl: './projects.template.html',
   providers: [{provide: BlogUrlService, useClass: ProjectsUrlService}]
})
export class Projects  {
}
