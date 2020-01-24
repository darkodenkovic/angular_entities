import { Injectable } from '@angular/core';
import {Item} from './item';
import {InMemoryDbService} from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const items = [
    { id: 1, name: 'Arrivals', type: 'BPM', checked: false },
    { id: 2, name: 'Car Wash', type: 'BPM', checked: false },
    { id: 3, name: 'Maintenance', type: 'Project', checked: false },
    { id: 4, name: 'Customer Payment', type: 'BPM', checked: false },
    { id: 5, name: 'Arrivals Database', type: 'Database', checked: false },
    { id: 6, name: 'Calculator', type: 'Application', checked: false },
    { id: 7, name: 'California', type: 'Server', checked: false },
  ];
  return {items};
}
  constructor() { }
}
