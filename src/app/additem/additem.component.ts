import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  private items: Item[];

  private getItem() {
    this.itemService.getItems().subscribe(item => this.items = item);
  }

  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.getItem();
  }

  connectItems(checkedItem): void {
    const itemsId = checkedItem.map(item => item.value);
    this.items.forEach(item => {
      item.checked = false;
      itemsId.forEach(checked => {
        if (item.id === checked) {
          item.checked = true;
        }
      });
      this.itemService.updateItem(item);
    });
    this.router.navigate(['/home']).then();
  }
}
