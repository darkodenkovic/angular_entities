import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  private itemsUrl = 'api/items';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getConnectedItems() {
    return this.http.get<Item[]>(this.itemsUrl + '/?checked=true');
  }

  updateItem(checkedItem: Item) {
    const url = `${this.itemsUrl}/${checkedItem.id}`;
    return this.http.put(url, checkedItem, this.httpOptions).subscribe({
      next() {
      },
      error() {
      },
      complete() {
      }
    });
  }
}
