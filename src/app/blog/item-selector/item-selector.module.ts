import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemSelectorComponent } from './item-selector.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemSelectorComponent],
  providers: [],
  exports: [ItemSelectorComponent]
})
export class ItemSelectorModule {}
