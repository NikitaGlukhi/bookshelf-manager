import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookDetailComponent, BookItemComponent } from '../shared';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
  ],
  imports: [CommonModule, BookListRoutingModule],
})
export class BookListModule {}
