import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
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
    this.items.map(item => item.checked = false);
    this.items.filter(item => itemsId.includes(item.id)).map(item => item.checked = true);
    this.items.map(item => this.itemService.updateItem(item));
    this.router.navigate(['/home']).then();
  }
}
