import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  private isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }
}
