import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { APIResponse } from 'src/models/api';
import { mapTo } from 'rxjs/operators';

/**
 * ### Return core service methods
 */
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private url = 'https://run.mocky.io/v3/b0f3e975-b815-4e88-8a6a-84af59fe32eb';

  constructor(private http: HttpClient) { }

  /**
   * ### Return list of restaurants
   */
  getRestuarants(): Observable<APIResponse[]> {
    return this.http.get<APIResponse[]>(this.url);
  }

  onOff() {
    return merge(
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }


}
