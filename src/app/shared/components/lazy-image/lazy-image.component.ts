import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {

  @Input()
  url!: string;

  @Input()
  alt: string = '';

  isLoaded: boolean = false;

  onLoaded(): void {
    this.isLoaded = true;
  }

}
