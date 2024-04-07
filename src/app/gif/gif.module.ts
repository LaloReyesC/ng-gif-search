import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card-list.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GifSearchPageComponent } from './pages/gif-search-page/gif-search-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GifCardComponent,
    GifCardListComponent,
    GifSearchComponent,
    GifSearchPageComponent,
  ],
  exports: [
    GifSearchPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class GifModule { }
