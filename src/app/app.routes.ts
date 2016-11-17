import { Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me';
import { HobbiesComponent } from './hobbies';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { ProjectsComponent } from './projects';

export const routes: Routes = [
   { path: '',      component: HomeComponent },
   { path: 'home',  component: HomeComponent },
   { path: 'projects', component: ProjectsComponent },
   { path: 'projects/:name', component: ProjectsComponent },
   { path: 'hobbies', component: HobbiesComponent },
   { path: 'hobbies/:name', component: HobbiesComponent },
   { path: 'contact-me', component: ContactMeComponent },
   { path: '**',    component: NoContentComponent },
];
