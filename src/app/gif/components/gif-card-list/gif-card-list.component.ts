import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifService } from '../../service/gif.service';

@Component({
  selector: 'gif-card-list',
  templateUrl: './gif-card-list.component.html',
})
export class GifCardListComponent {

  constructor(private _gifService: GifService) {
  }

  get gifList(): Gif[] {
    return this._gifService.gifList;
  }
}
