import { OnInit, Component } from '@angular/core';

import { BooksService } from '../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  selectedBookId?: string;

  constructor(readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this.booksService.get().subscribe();
  }
}
