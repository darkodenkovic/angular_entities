import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';
import {find} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  items: Item[];
  checkedItems: [];
  private getItem() {
    this.itemService.getItems().subscribe(item => this.items = item);
  }

  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.getItem();
  }

  connectItems(checkedItem): void {
    // tslint:disable-next-line:forin
    // for (const i in this.items) {
      // this.items[0].checkedItem = false;
      // for (const id of checkedItem.map(item => item.value)) {
        // if (this.items[0].idItem === id) {
         // this.items[0].checkedItem = true;
        // }
     // }
      // console.log(id);
      // this.items.filter(item => item.idItem === id)
      // console.log(this.items.filter(item => item.idItem === id));
      this.itemService.updateItem(this.items[0]);
      this.router.navigate(['/home']);
    // console.log(this.items[i]);
   // }
  }
}
