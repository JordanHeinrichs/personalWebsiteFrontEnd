import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemChoice } from './item-choice';

@Component({
  selector: 'app-item-selector',
  styleUrls: ['item-selector.component.css'],
  templateUrl: 'item-selector.component.html'
})
export class ItemSelectorComponent {
  selectedItem: ItemChoice;
  @Input() choices: ItemChoice[];
  @Output() onSelected = new EventEmitter<ItemChoice>();

  selectItem(item: ItemChoice): void {
    this.selectedItem = item;
    this.onSelected.emit(item);
  }
}
