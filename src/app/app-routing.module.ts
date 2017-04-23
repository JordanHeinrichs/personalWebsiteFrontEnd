import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home.component';
import { NoContentComponent } from './core/no-content.component';
import { HobbiesComponent } from './blog/hobbies.component';
import { ProjectsComponent } from './blog/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'contact-me', loadChildren: 'app/contact-me/contact-me.module#ContactMeModule' },
  { path: 'home', component: HomeComponent  },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'hobbies/:name', component: HobbiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:name', component: ProjectsComponent },
  { path: '**', component: NoContentComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

