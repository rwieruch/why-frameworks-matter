import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  doSearch(query) {
    return this.http.get(Config.toApiUrl(`search?query=${query}&hitsPerPage=200`));
  }
}
