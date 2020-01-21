import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// import {catchError, tap, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  private itemsUrl = 'api/items';

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
