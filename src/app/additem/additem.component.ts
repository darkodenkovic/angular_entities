import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService} from '../item.service';
import {MatListOption} from '@angular/material';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  items: Item[];
  // checked: Item[];
  private getItem() {
    this.itemService.getItems().subscribe(item => this.items = item);
  }
  constructor(private itemService: ItemService) { }
  ngOnInit() {
    this.getItem();
  }
  connectItems(checkedItems): void {
  console.log(checkedItems);
    /*s
      name = name.trim();
    if (!name) { return; }
    this.heroService.dodajHeroja({ name } as  Hero)
      .subscribe(heroji => {
        this.heroji.push(heroji);
      });
  }*/
  }
}
