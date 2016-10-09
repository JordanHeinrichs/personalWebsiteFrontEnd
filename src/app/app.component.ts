/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Menubar } from './menubar/';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: './app.component.html'
})
export class App {
  url = 'http://jordanheinrichs.com';

  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
  }

}
