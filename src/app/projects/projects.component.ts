import { Component, OnInit } from '@angular/core';
import { ItemSelector, ItemChoice } from './../itemselector';
import { ProjectService } from './projects.service';

@Component({
   selector: 'projects',
   templateUrl: './projects.template.html'
})
export class Projects implements OnInit {
   projects: ItemChoice[];
   projectHtml: string;

   constructor(private projectService: ProjectService) {
      this.projects = null;
      this.projectHtml = '';
   }

   ngOnInit(): void {
      this.projectService.projectList()
         .then(projectList => this.projects = projectList)
         .then(projectList => {
            // Always load the last project
            this.onProjectSelected(projectList[projectList.length - 1]);
         });
   }

   onProjectSelected(item: ItemChoice) {
      this.projectService.project(item.name)
         .then(blog => this.projectHtml = blog)
         .catch((error: any) => this.projectHtml = 'Error: can not load project.' );
   }
}
