import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { MenubarComponent } from './menubar.component';
import { NoContentComponent } from './no-content.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CollapseModule.forRoot(),
    RouterModule
  ],
  declarations: [
    MenubarComponent,
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
