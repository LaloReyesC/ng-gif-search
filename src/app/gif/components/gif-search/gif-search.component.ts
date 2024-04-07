import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../service/gif.service';

@Component({
  selector: 'gif-search',
  templateUrl: './gif-search.component.html',
})
export class GifSearchComponent {

  @ViewChild('txtTagInput')
  tagInputControl!: ElementRef<HTMLInputElement>;

  constructor(private _gifService: GifService) { }

  onSearch(): void {

    this._gifService.newSearch(this.tagInputControl.nativeElement.value);

    this.tagInputControl.nativeElement.value = '';
  }
}
