import { Component, OnInit  } from '@angular/core';
import { ItemSelector, ItemChoice } from './../itemselector';
import { HobbiesService } from './hobbies.service';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.template.html'
})
export class Hobbies implements OnInit {
   hobby: ItemChoice[];
   hobbyHtml: string;

   constructor(private hobbiesService: HobbiesService) {
      this.hobby = null;
      this.hobbyHtml = '';
   }

   ngOnInit(): void {
      this.hobbiesService.hobbyList()
         .then(projectList => this.hobby = projectList)
         .then(projectList => {
            // Always load the last project
            this.onHobbySelected(projectList[projectList.length - 1]);
         });
   }

   onHobbySelected(item: ItemChoice) {
      this.hobbiesService.hobby(item.name)
         .then(blog => this.hobbyHtml = blog)
         .catch((error: any) => this.hobbyHtml = 'Error: can not load project.' );
   }
}
