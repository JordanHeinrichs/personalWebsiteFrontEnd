import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactMeComponent } from './contact-me.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ContactMeComponent },
  ])],
  exports: [RouterModule]
})
export class ContactMeRoutingModule { }
