import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  panelOpenState = true;

  constructor(private itemService: ItemService, private router: Router) {
  }

  private getItems() {
    this.itemService.getConnectedItems().subscribe(item => this.items = item);
  }

  ngOnInit() {
    this.getItems();
  }
}
