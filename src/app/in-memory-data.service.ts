import { Injectable } from '@angular/core';
import {Item} from './item';
import {InMemoryDbService} from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const items = [
    { idItem: 1, nameItem: 'Arrivals', typeItem: 'BPM', checkedItem: false },
    { idItem: 2, nameItem: 'Car Wash', typeItem: 'BPM', checkedItem: false },
    { idItem: 3, nameItem: 'Maintennce', typeItem: 'Project', checkedItem: true },
    { idItem: 4, nameItem: 'Customer Payment', typeItem: 'BPM', checkedItem: true },
    { idItem: 5, nameItem: 'Arrivals Database', typeItem: 'Database', checkedItem: false },
    { idItem: 6, nameItem: 'Calculator', typeItem: 'Application', checkedItem: false },
    { idItem: 7, nameItem: 'California', typeItem: 'Server', checkedItem: false },
  ];
  return {items};
}
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.idItem)) + 1 : 1;
  }
  constructor() { }
}
