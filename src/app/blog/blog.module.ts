import { NgModule } from '@angular/core';

import { BlogContentComponent } from './blog-content.component';
import { BlogUrlRouteService } from './blog-url-route.service';
import { ItemSelectorModule } from './item-selector/item-selector.module';
import { ProjectsComponent } from './projects.component';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  imports: [ItemSelectorModule],
  declarations: [BlogContentComponent, ProjectsComponent, HobbiesComponent],
  providers: [BlogUrlRouteService],
  exports: [HobbiesComponent, ProjectsComponent]
})
export class BlogModule { }
