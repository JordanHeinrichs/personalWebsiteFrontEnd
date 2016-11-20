import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { MenubarComponent } from './menubar.component';
import { NoContentComponent } from './no-content.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    MenubarComponent,
    CollapseDirective,
    NoContentComponent,
    HomeComponent
  ],
  providers: [],
  exports: [
    MenubarComponent,
    NoContentComponent,
    HomeComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
