import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  addItems() {
    this.router.navigate(['/add-item']).then();
  }
}
