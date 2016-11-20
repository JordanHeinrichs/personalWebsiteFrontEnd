import { NgModule } from '@angular/core';

import { ContactMeComponent } from './contact-me.component';
import { ContactMeRoutingModule } from './contact-me-routing.module';

@NgModule({
  imports: [ContactMeRoutingModule],
  declarations: [ContactMeComponent],
  providers: [],
  exports: []
})
export class ContactMeModule { }
