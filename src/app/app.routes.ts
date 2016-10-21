import { Routes, RouterModule } from '@angular/router';
import { About } from './about';
import { ContactMe } from './contact-me';
import { Hobbies } from './hobbies';
import { Home } from './home';
import { NoContent } from './no-content';
import { Projects } from './projects';

export const ROUTES: Routes = [
   { path: '',      component: Home },
   { path: 'home',  component: Home },
   { path: 'projects', component: Projects },
   { path: 'projects/:name', component: Projects },
   { path: 'hobbies', component: Hobbies },
   { path: 'hobbies/:name', component: Hobbies },
   { path: 'contact-me', component: ContactMe },
   { path: '**',    component: NoContent },
];
