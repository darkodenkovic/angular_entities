import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, concatAll, concatMap, filter, map, mergeMap, tap} from 'rxjs/operators';

// import {catchError, tap, map, switchMap} from 'rxjs/operators';

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
      next() {},
      error() {},
      complete() {}
    });
  }
}
