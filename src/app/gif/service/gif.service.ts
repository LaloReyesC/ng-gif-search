import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, GifResult } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _url_base: string = 'https://api.giphy.com/v1/gifs';
  private _searchHistory: string[] = [];
  private _gifList: Gif[] = [];

  constructor(private _httpClient: HttpClient) {
    this.getHistoryFromLocalStorage();
  }

  get gifList(): Gif[] {
    return this._gifList;
  }

  get searchHistory(): string[] {
    return this._searchHistory;
  }

  private loadGifs(search: string): any {

    const params = new HttpParams()
      .set("api_key", "w3C8esdiRldOWkkafMy3IfQDYfNKZMf3")
      .set("limit", "30")
      .set("q", search);

    this._httpClient.get<GifResult>(`${this._url_base}/search`, { params })
    .subscribe(result => {
      this._gifList = result.data;
    });

  }

  private organizeHistory(search: string): void {

    if(this._searchHistory.some(x => x === search)){
      this._searchHistory = this._searchHistory.filter(x => x !== search);
    }

    this._searchHistory.unshift(search);
    this._searchHistory = this._searchHistory.splice(0, 10);

  }

  private setHistoryOnLocalStorage(): void {

    if (this._searchHistory.length <= 0) return;

    localStorage.setItem('searchHistory', JSON.stringify(this._searchHistory));
  }

  private getHistoryFromLocalStorage(): void {

    let historyJsonString: string = localStorage.getItem('searchHistory')!;

    if (!historyJsonString) return;

    this._searchHistory = JSON.parse(historyJsonString);

    this.newSearch(this._searchHistory[0]);

  }

  newSearch(search: string): void {

    if (search.length <= 0) return;

    search = search.toLowerCase();

    this.loadGifs(search);

    this.organizeHistory(search);

    this.setHistoryOnLocalStorage();

  }

}
