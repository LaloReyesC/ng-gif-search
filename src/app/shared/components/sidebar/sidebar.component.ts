import { Component } from '@angular/core';
import { GifService } from '../../../gif/service/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private _gifService: GifService) { }

  get searchHistory(): string[] {
    return [...this._gifService.searchHistory];
  }

  searchGifs(search: string): void {
    this._gifService.newSearch(search);
  }
}
