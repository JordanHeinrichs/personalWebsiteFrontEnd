import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemChoice } from './itemchoice';

@Component({
  selector: 'item-selector',
  styleUrls: ['itemselector.component.css'],
  templateUrl: 'itemselector.template.html'
})
export class ItemSelector {
   selectedItem: ItemChoice;
   @Input() choices: ItemChoice[];
   @Output() onSelected = new EventEmitter<ItemChoice>();

   selectItem(item: ItemChoice): void {
      this.selectedItem = item;
      this.onSelected.emit(item);
   }
}
