import { Component } from '@angular/core';

import { ItemSelector, ItemChoice } from './../itemselector';
import { ITEMS } from './../itemselector/mock/mock-data';

@Component({
  selector: 'projects',
  // styleUrls: [ './projects.style.css' ],
  templateUrl: './projects.template.html'
})
export class Projects {
   projects: ItemChoice[];
   project: ItemChoice;

   constructor() {
      this.projects = ITEMS;
      this.project = null;
   }

   onProjectSelected(item: ItemChoice) {
      this.project = item;
   }
}
