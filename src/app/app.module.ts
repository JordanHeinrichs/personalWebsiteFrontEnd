import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogContentComponent } from './blog-content';
import { CollapseDirective } from 'ng2-bootstrap';
import { ContactMeComponent } from './contact-me';
import { HobbiesComponent } from './hobbies';
import { HomeComponent } from './home';
import { ItemSelectorComponent } from './itemselector';
import { MenubarComponent } from './menubar';
import { NoContentComponent } from './no-content';
import { ProjectsComponent } from './projects';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    HobbiesComponent,
    HomeComponent,
    ItemSelectorComponent,
    MenubarComponent,
    NoContentComponent,
    ProjectsComponent,
    BlogContentComponent,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
