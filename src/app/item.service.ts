import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

// import {catchError, tap, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  private itemsUrl = 'api/items';
  httpOpcije = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
  updateItem(checkedItem: Item) {
    const url = `${this.itemsUrl}/${checkedItem.idItem}`;
    console.log(checkedItem);
    console.log(url);
    return this.http.put(url, checkedItem, this.httpOpcije).subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log('done');
      }
    });
  }
}
